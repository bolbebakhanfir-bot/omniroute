// Usage: EMERGENCY="+974 xxxx xxxx" node build.js [onlyIds comma-separated]
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const SCENES = require('./src/scenes.js');
const POSTERS = require('./src/posters.js');

const ROOT = __dirname;
const HAS_NUMBER = true;
// Duty mobiles supplied by the user. shortcut: Azure Beach Club uses the hotel number (not specified), confirm.
const NUM = { wp: '70807279', hotel: '70807278', azure: '70807278' };
const numHtml = p => p.site === 'all'
  ? `<div style="display:flex;gap:34px"><div><div class="sm">WATER PARK</div><div class="num" style="font-size:58px">${NUM.wp}</div></div><div><div class="sm">HOTEL</div><div class="num" style="font-size:58px">${NUM.hotel}</div></div></div>`
  : `<div class="num">${NUM[p.site]}</div>`;

const TYPES = {
  mandatory: { color: '#0b5cad', label: 'MANDATORY', ink: '#fff' },
  warning: { color: '#f2a900', label: 'WARNING', ink: '#1a1a1a' },
  prohibition: { color: '#d32f2f', label: 'PROHIBITED', ink: '#fff' },
  safe: { color: '#1e8e3e', label: 'SAFE PRACTICE', ink: '#fff' },
};
const SITES = {
  wp: 'MERYAL WATER PARK',
  hotel: 'RIXOS PREMIUM QETAIFAN ISLAND NORTH',
  azure: 'AZURE BEACH CLUB',
  all: 'RIXOS • MERYAL • AZURE',
};
const LOGO_NAMES = { rixos: 'RIXOS', meryal: 'MERYAL', azure: 'AZURE' };
const SITE_LOGOS = { wp: ['meryal', 'rixos'], hotel: ['rixos'], azure: ['azure', 'rixos'], all: ['rixos', 'meryal', 'azure'] };

function logoData(key) {
  for (const ext of ['png', 'svg', 'jpg', 'jpeg', 'webp']) {
    const f = path.join(ROOT, 'logos', `${key}.${ext}`);
    if (fs.existsSync(f)) {
      const mime = ext === 'svg' ? 'image/svg+xml' : `image/${ext === 'jpg' ? 'jpeg' : ext}`;
      return `data:${mime};base64,${fs.readFileSync(f).toString('base64')}`;
    }
  }
  return null;
}
// A real photo in photos/<id>.jpg|png replaces the drawn scene for that poster.
function photoHtml(p) {
  for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
    const f = path.join(ROOT, 'photos', `${String(p.id).padStart(2, '0')}.${ext}`);
    if (fs.existsSync(f)) return `<img src="data:image/${ext === 'jpg' ? 'jpeg' : ext};base64,${fs.readFileSync(f).toString('base64')}" style="width:100%;height:100%;object-fit:cover;display:block">`;
  }
  return null;
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function typeIcon(t) {
  const c = TYPES[t];
  if (t === 'warning') return `<svg width="104" height="104" viewBox="-52 -52 104 104"><path d="M0 -44 L46 36 H-46z" fill="#fff" stroke="#1a1a1a" stroke-width="8" stroke-linejoin="round"/><text y="26" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="56" fill="#1a1a1a">!</text></svg>`;
  if (t === 'prohibition') return `<svg width="104" height="104" viewBox="-52 -52 104 104"><circle r="40" fill="#fff" stroke="#fff" stroke-width="0"/><circle r="40" fill="none" stroke="#d32f2f" stroke-width="12"/><path d="M-28 -28 L28 28" stroke="#d32f2f" stroke-width="12" stroke-linecap="round"/></svg>`;
  if (t === 'safe') return `<svg width="104" height="104" viewBox="-52 -52 104 104"><rect x="-42" y="-42" width="84" height="84" rx="12" fill="#fff"/><path d="M-22 2 l14 15 l30 -34" stroke="#1e8e3e" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `<svg width="104" height="104" viewBox="-52 -52 104 104"><circle r="44" fill="#fff"/><path d="M-22 2 l14 15 l30 -34" stroke="#0b5cad" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function logosHtml(site) {
  return SITE_LOGOS[site].map(k => {
    const d = logoData(k);
    return d ? `<img class="logo" src="${d}">` : `<div class="logo ph">${LOGO_NAMES[k]}<small>LOGO</small></div>`;
  }).join('');
}

function html(p) {
  const T = TYPES[p.type];
  const fs1 = p.title.length <= 20 ? 112 : p.title.length <= 26 ? 96 : p.title.length <= 32 ? 82 : 70;
  const li = (arr, cls) => arr.map(t => `<li class="${cls}"><i></i><span>${esc(t)}</span></li>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1122px;height:1586px;overflow:hidden;font-family:"Liberation Sans",Arial,Helvetica,sans-serif;background:#fff}
.poster{position:relative;width:1122px;height:1586px;overflow:hidden;background:#fff}
.hdr{height:148px;background:${T.color};color:${T.ink};display:flex;align-items:center;justify-content:space-between;padding:0 52px}
.hdr .l{display:flex;align-items:center;gap:26px}
.hdr .lab{white-space:nowrap;font-size:${p.site === 'all' ? 38 : 58}px;font-weight:900;letter-spacing:2px;line-height:1}
.hdr .site{white-space:nowrap;font-size:${p.site === 'all' ? 17 : 22}px;font-weight:800;letter-spacing:1.5px;margin-top:8px;opacity:.95}
.logos{display:flex;gap:16px;align-items:center;background:#fff;border-radius:18px;padding:12px 20px;height:104px}
.logo{height:${p.site === 'all' ? 60 : 76}px;max-width:${p.site === 'all' ? 150 : 210}px;object-fit:contain}
.logo.ph{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:${p.site === 'all' ? 118 : 150}px;height:${p.site === 'all' ? 60 : 76}px;border:3px dashed #9aa7b5;border-radius:12px;color:#5b6b7a;font-weight:900;font-size:${p.site === 'all' ? 19 : 24}px;letter-spacing:1px}
.logo.ph small{font-size:12px;font-weight:700;letter-spacing:3px}
.stripe{height:14px;background:repeating-linear-gradient(135deg,#ffc400 0 22px,#1a1a1a 22px 44px)}
.titlebox{padding:22px 66px 0}
.dept{display:inline-block;background:#0b1f3a;color:#fff;font-weight:800;font-size:24px;letter-spacing:2px;padding:8px 22px;border-radius:30px;text-transform:uppercase}
h1{display:inline-block;font-size:${fs1}px;line-height:1.02;font-weight:900;color:#0b1f3a;margin-top:12px;letter-spacing:-1px;white-space:nowrap}
.tag{font-size:34px;font-weight:600;color:#3d4a5c;margin-top:10px}
.illus{margin:18px 65px 0;width:992px;height:596px;border-radius:30px;overflow:hidden;border:9px solid ${T.color};background:#fff}
.illus svg{width:100%;height:100%;display:block}
.cards{display:flex;gap:26px;padding:22px 65px 0}
.card{flex:1;border-radius:24px;overflow:hidden;background:#f5f8fb;border:3px solid #dde5ee}
.card h3{font-size:34px;font-weight:900;padding:10px 24px;color:#fff;letter-spacing:1px}
.card.do h3{background:#1e8e3e}.card.dont h3{background:#d32f2f}
.card ul{list-style:none;padding:14px 20px 12px}
.card li{display:flex;gap:14px;align-items:flex-start;font-size:27px;font-weight:700;color:#18222f;line-height:1.14;margin-bottom:13px}
.card li i{flex:0 0 36px;height:36px;border-radius:50%;margin-top:0;position:relative}
.do li i{background:#1e8e3e}.dont li i{background:#d32f2f}
.do li i::after{content:"";position:absolute;left:11px;top:6px;width:10px;height:18px;border:solid #fff;border-width:0 5px 5px 0;transform:rotate(45deg)}
.dont li i::before,.dont li i::after{content:"";position:absolute;left:9px;top:15px;width:18px;height:5px;background:#fff;border-radius:3px}
.dont li i::before{transform:rotate(45deg)}.dont li i::after{transform:rotate(-45deg)}
.foot{position:absolute;left:0;right:0;bottom:0;height:220px;background:#0b1f3a;color:#fff}
.foot .bar{height:14px;background:repeating-linear-gradient(135deg,#d32f2f 0 22px,#fff 22px 44px)}
.foot .in{display:flex;align-items:center;justify-content:space-between;padding:12px 56px 0;height:206px}
.em{flex:1;min-width:0;display:flex;align-items:center;gap:26px}
.em .ph{flex:0 0 110px;width:110px;height:110px;border-radius:50%;background:#d32f2f;display:flex;align-items:center;justify-content:center}
.em .lbl{white-space:nowrap;font-size:21px;font-weight:800;letter-spacing:2px;color:#ffd0d0}
.em .num{white-space:nowrap;font-size:${HAS_NUMBER ? 82 : 60}px;font-weight:900;letter-spacing:2px;line-height:1.05;${HAS_NUMBER ? '' : 'border:4px dashed #ffb4b4;padding:6px 16px;border-radius:12px;margin-top:6px'}}
.em .sm{font-size:21px;font-weight:800;letter-spacing:2px;color:#ffd0d0}
.em .sub{white-space:nowrap;font-size:20px;font-weight:700;margin-top:4px;color:#cfe0f3}
.right{flex:0 0 250px;text-align:right;font-size:21px;font-weight:700;line-height:1.35;color:#cfe0f3}
.right b{display:block;color:#fff;font-size:26px;font-weight:900;letter-spacing:1px}
</style></head><body><div class="poster">
<div class="hdr"><div class="l">${typeIcon(p.type)}<div><div class="lab">${T.label}</div><div class="site">${SITES[p.site]}</div></div></div><div class="logos">${logosHtml(p.site)}</div></div>
<div class="stripe"></div>
<div class="titlebox"><div><span class="dept">${esc(p.dept)}</span></div><div><h1>${esc(p.title)}</h1></div><div class="tag">${esc(p.tagline)}</div></div>
<div class="illus">${photoHtml(p) || `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${SCENES[p.scene]()}</svg>`}</div>
<div class="cards">
<div class="card do"><h3>DO</h3><ul>${li(p.dos, 'do')}</ul></div>
<div class="card dont"><h3>DON'T</h3><ul>${li(p.donts, 'dont')}</ul></div>
</div>
<div class="foot"><div class="bar"></div><div class="in">
<div class="em"><div class="ph"><svg width="64" height="64" viewBox="0 0 24 24" fill="#fff"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .700-.2 1z"/></svg></div>
<div><div class="lbl">EMERGENCY • SECURITY DUTY MOBILE${p.site === 'wp' ? ' — WATER PARK' : p.site === 'all' ? '' : ' — HOTEL'}</div>${numHtml(p)}<div class="sub">Call first • Say where • Say what happened • Say how many injured</div></div></div>
<div class="right"><b>Safety &amp; Security Department</b>HSE • Poster ${String(p.id).padStart(2, '0')}</div>
</div></div>
</div></body></html>`;
}

(async () => {
  const only = process.argv[2] ? process.argv[2].split(',').map(Number) : null;
  const list = POSTERS.filter(p => !only || only.includes(p.id));
  const outDir = path.join(ROOT, 'out');
  for (const sz of ['A3', 'A4']) fs.mkdirSync(path.join(outDir, sz), { recursive: true });
  fs.mkdirSync(path.join(outDir, 'preview'), { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1122, height: 1586 } });
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  for (const p of list) {
    await page.setContent(html(p), { waitUntil: 'load' });
    await page.evaluate(() => { const h = document.querySelector('h1'); let s = parseFloat(getComputedStyle(h).fontSize); while (h.scrollWidth > 990 && s > 40) { s -= 2; h.style.fontSize = s + 'px'; } });
    const name = `${String(p.id).padStart(2, '0')}_${p.site}_${slug(p.title)}`;
    await page.pdf({ path: path.join(outDir, 'A3', `${name}_A3.pdf`), width: '297mm', height: '420mm', printBackground: true, pageRanges: '1' });
    await page.pdf({ path: path.join(outDir, 'A4', `${name}_A4.pdf`), width: '210mm', height: '297mm', scale: 0.7071, printBackground: true, pageRanges: '1' });
    if (only || p.id % 1 === 0) await page.screenshot({ path: path.join(outDir, 'preview', `${name}.png`) });
    process.stdout.write(`${p.id} `);
  }
  await browser.close();
  console.log('\nDone', list.length, '');
})();
