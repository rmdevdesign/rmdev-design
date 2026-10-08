"""Generate the same static, crawlable header on every indexable site page."""
from pathlib import Path
import re
ROOT = Path(__file__).resolve().parent.parent
ITEMS = [('besoins', "Cas d’usage"), ('services', 'Expertises'), ('approche', 'Approche'), ('projets', 'Réalisations'), ('references', 'Références'), ('faq', 'FAQ'), ('contact', 'Discuter du projet')]
EXPERTISES = [
    ('developpement-vr-unity.html', 'Unity & XR'),
    ('developpement-meta-quest-3.html', 'Applications Quest 3'),
    ('realite-mixte-entreprise.html', 'Réalité mixte'),
    ('demonstrateur-vr-industriel.html', 'Démonstrateur industriel'),
    ('prototypage-interactif.html', 'Prototypage interactif'),
    ('design-ui-ux-figma.html', 'Design UI/UX'),
    ('configurateur-3d-web.html', 'Configurateurs 3D web'),
]
for path in list(ROOT.glob('*.html')) + list((ROOT/'guides').glob('*.html')):
    text = path.read_text()
    if 'rel="canonical"' not in text or 'noindex' in text: continue
    prefix = '../' if path.parent.name == 'guides' else ''
    home = '' if path.name == 'index.html' else prefix + 'index.html'
    def links(mobile=False):
        result = []
        for anchor, label in ITEMS:
            classes = ('mobile-nav-link' if mobile else 'label') + ((' mobile-nav-cta' if mobile else ' nav-cta') if anchor == 'contact' else '')
            if anchor == 'services':
                entries = [(home+'#services', 'Toutes les expertises')] + [(prefix+url, name) for url, name in EXPERTISES]
                submenu = ''.join(f'<a href="{url}" class="expertise-menu-link">{name}</a>' for url, name in entries)
                result.append(f'<details class="expertise-menu{(" expertise-menu-mobile" if mobile else "")}"><summary class="{classes}">{label}</summary><nav class="expertise-submenu" aria-label="Pages d’expertise">{submenu}</nav></details>')
            else:
                result.append(f'<a href="{home}#{anchor}" class="{classes}">{label}</a>')
        return '\n'.join(result)
    header = f'''<!-- shared-header:start -->
<header class="site-header">
  <a class="logo" href="{prefix}index.html" aria-label="RM Dev Design, accueil"><img class="logoRMDevDesign" src="{prefix}Images/RMDesignLogo.png" width="3768" height="512" alt="RM Dev Design"></a>
  <div class="site-nav"><nav class="header-menu-default" aria-label="Navigation principale">{links()}</nav>
  <button type="button" class="burger-menu" id="burger-menu" aria-label="Ouvrir le menu" aria-controls="mobile-nav" aria-expanded="false"><span></span><span></span><span></span></button></div>
</header>
<nav class="mobile-nav" id="mobile-nav" aria-label="Navigation mobile" aria-hidden="true" inert>{links(True)}</nav>
<noscript><nav class="nojs-nav" aria-label="Navigation sans JavaScript">{links()}</nav></noscript>
<!-- shared-header:end -->'''
    if '<!-- shared-header:start -->' in text:
        text = re.sub(r'<!-- shared-header:start -->.*?<!-- shared-header:end -->', header, text, count=1, flags=re.S)
    elif path.name == 'index.html':
        start=text.index('<header class="site-header">');end=text.index('<main class="home">', start)
        text=text[:start]+header+'\n'+text[end:]
    elif '<header class="expertise-header">' in text:
        text=re.sub(r'<header class="expertise-header">.*?</header>',header,text,count=1,flags=re.S)
    else:
        text=text.replace('<body>','<body>\n'+header,1)
    # Load the shared styles after page-specific rules.
    if 'header.css' not in text:
        text=text.replace('</head>',f'<link rel="stylesheet" href="{prefix}header.css">\n</head>')
    if 'header.js' not in text:
        text=text.replace('</body>',f'<script src="{prefix}header.js" defer></script>\n</body>')
    if path.name=='confidentialite.html':
        text=text.replace('padding: 72px 24px 96px;', 'padding: 120px 24px 96px;')
    path.write_text(text)
