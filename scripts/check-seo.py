"""Validate static indexable pages, metadata, structured data and local links."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
DOMAIN = 'https://rmdev.design'
class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.meta = {}; self.links = []; self.h1 = 0; self.canonical = None
        self.lang = None; self.main = 0; self.title = ''; self.in_title = False
        self.in_json = False; self.json_text = ''; self.schemas = []; self.ids = set()
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.add(a['id'])
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'meta': self.meta[a.get('name', a.get('property'))] = a.get('content')
        if tag == 'title': self.in_title = True
        if tag == 'script' and a.get('type') == 'application/ld+json': self.in_json = True
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href')
        for attr in ['href', 'src', 'poster']:
            if a.get(attr): self.links.append(a[attr])
        if tag == 'img' and 'noindex' not in self.meta.get('robots', ''):
            assert 'alt' in a, 'Image missing alt'
            assert 'width' in a and 'height' in a, 'Image missing dimensions'
    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_json: self.json_text += data
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.in_json:
            self.schemas.append(json.loads(self.json_text)); self.in_json = False; self.json_text = ''

pages = {}; errors = []
for path in sorted(ROOT.rglob('*.html')):
    if any(part.startswith('.') for part in path.relative_to(ROOT).parts): continue
    if path.name.startswith('google'): continue
    try: pages[path] = Page(path.read_text())
    except (AssertionError, ValueError) as error: errors.append(f'{path.name}: {error}')
seen_title = set(); seen_description = set(); canonicals = set()
for path, p in pages.items():
    try:
        assert p.lang == 'fr' and p.h1 == 1 and p.main == 1, 'Language / H1 / main'
        assert p.title and p.title not in seen_title, 'Missing or duplicate title'
        seen_title.add(p.title)
        if 'noindex' not in p.meta.get('robots', ''):
            expected = DOMAIN + ('/' if path.name == 'index.html' else '/' + path.relative_to(ROOT).as_posix())
            assert p.canonical == expected, 'Canonical'
            desc = p.meta.get('description'); assert desc and desc not in seen_description, 'Description'
            seen_description.add(desc); canonicals.add(expected)
            for field in ['title', 'description', 'url', 'type', 'image']:
                assert p.meta.get('og:' + field), 'Missing OG ' + field
            assert p.meta['og:url'] == expected, 'OG URL'
            assert p.schemas, 'Missing structured data'
        for link in p.links:
            url = urlparse(link)
            if url.scheme or url.netloc: continue
            target = ROOT / unquote(url.path.lstrip('/')) if url.path.startswith('/') else path.parent / unquote(url.path)
            if not url.path: target = path
            if target.is_dir(): target = target / 'index.html'
            assert target.exists(), 'Missing local target: ' + link
            if url.fragment and target in pages:
                assert url.fragment in pages[target].ids, 'Missing anchor: ' + link
    except AssertionError as error: errors.append(f'{path.relative_to(ROOT)}: {error}')
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
sitemap = {el.text for el in ET.parse(ROOT/'sitemap.xml').findall('.//s:loc', ns)}
if sitemap != canonicals: errors.append('Sitemap differs from indexable canonical pages')
# Every indexable page must be reachable through actual HTML links from home.
reachable = set(); pending = [ROOT / 'index.html']
while pending:
    current = pending.pop()
    if current in reachable or current not in pages: continue
    reachable.add(current)
    for link in pages[current].links:
        u = urlparse(link)
        if u.scheme or u.netloc: continue
        target = ROOT / unquote(u.path.lstrip('/')) if u.path.startswith('/') else current.parent / unquote(u.path)
        if not u.path: target = current
        if target.is_dir(): target = target / 'index.html'
        target = target.resolve()
        if target in pages: pending.append(target)
for path, p in pages.items():
    if p.canonical and 'noindex' not in p.meta.get('robots', '') and path not in reachable:
        errors.append(f'Unreachable indexable page: {path.name}')
if errors:
    print('\n'.join(errors)); raise SystemExit(1)
print(f'OK: {len(pages)} pages, {len(canonicals)} indexable URLs, metadata, JSON-LD, assets and anchors.')
