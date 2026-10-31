// Flat-style SVG illustrations (viewBox 0 0 640 400). Each returns inner SVG markup.
const P = (x, y, s = 1, o = {}) => {
  const { shirt = '#e8505b', skin = '#f2c18d', pants = '#2d3e50', pose = 'stand', hair = '#2b2118', extra = '', rot = 0 } = o;
  const arms = pose === 'up'
    ? `<path d="M-14 -92 L-30 -128 M14 -92 L30 -128" stroke="${skin}" stroke-width="9" stroke-linecap="round"/>`
    : pose === 'wave'
    ? `<path d="M-14 -92 L-24 -58 M14 -92 L34 -126" stroke="${skin}" stroke-width="9" stroke-linecap="round"/>`
    : pose === 'cross'
    ? `<path d="M-14 -90 L8 -74 M14 -90 L-8 -74" stroke="${skin}" stroke-width="9" stroke-linecap="round"/>`
    : pose === 'out'
    ? `<path d="M-14 -92 L-42 -78 M14 -92 L42 -78" stroke="${skin}" stroke-width="9" stroke-linecap="round"/>`
    : `<path d="M-14 -92 L-22 -58 M14 -92 L22 -58" stroke="${skin}" stroke-width="9" stroke-linecap="round"/>`;
  return `<g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
    <rect x="-12" y="-56" width="10" height="56" rx="4" fill="${pants}"/><rect x="2" y="-56" width="10" height="56" rx="4" fill="${pants}"/>
    <rect x="-15" y="-100" width="30" height="50" rx="10" fill="${shirt}"/>${arms}
    <circle cx="0" cy="-114" r="14" fill="${skin}"/><path d="M-14 -116 a14 14 0 0 1 28 0 z" fill="${hair}"/>${extra}</g>`;
};
const sky = (t = '#7fd0f2', b = '#eaf8ff') => `<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="640" height="400" fill="url(#sk)"/><circle cx="560" cy="64" r="44" fill="#ffe08a" opacity=".5"/><circle cx="560" cy="64" r="30" fill="#ffd23f"/>`;
const room = (c = '#f4efe6', f = '#cfc3ad') => `<rect width="640" height="400" fill="${c}"/><rect y="320" width="640" height="80" fill="${f}"/><rect y="316" width="640" height="6" fill="#00000012"/>`;
const water = (y = 300, c = '#1fb5d4') => `<rect y="${y}" width="640" height="${400 - y}" fill="${c}"/><path d="M0 ${y} q20 -10 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V${y + 14} H0z" fill="#9ae4f5" opacity=".8"/>`;
const deck = (y = 330) => `<rect y="${y}" width="640" height="${400 - y}" fill="#efe2bd"/><rect y="${y}" width="640" height="6" fill="#00000014"/>`;
const arrow = (x1, y1, x2, y2, c = '#fff') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="8" stroke-linecap="round" stroke-dasharray="2 14"/><circle cx="${x2}" cy="${y2}" r="9" fill="${c}"/>`;
const tag = (x, y, t, c = '#0b5cad', w0 = 190) => { const w = Math.round(t.length * 13.4 + 48); return `<g transform="translate(${x},${y})"><rect width="${w}" height="44" rx="22" fill="${c}"/><text x="${w / 2}" y="30" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="800" font-size="22" fill="#fff">${t}</text></g>`; };
const check = (x, y, c = '#1e8e3e') => `<g transform="translate(${x},${y})"><circle r="26" fill="${c}"/><path d="M-12 0 l8 9 l16 -18" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
const cross = (x, y) => `<g transform="translate(${x},${y})"><circle r="26" fill="#d32f2f"/><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#fff" stroke-width="7" stroke-linecap="round"/></g>`;
const flame = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M0 -60 C20 -34 34 -22 28 0 C24 16 8 20 0 20 C-10 20 -26 14 -28 -2 C-30 -20 -10 -30 0 -60z" fill="#ff6b1a"/><path d="M0 -34 C12 -18 18 -10 14 4 C12 12 4 14 0 14 C-6 14 -14 10 -14 2 C-14 -8 -4 -16 0 -34z" fill="#ffc83d"/></g>`;
const warnTri = (x, y, s = 1, glyph = '!') => `<g transform="translate(${x},${y}) scale(${s})"><path d="M0 -50 L48 34 H-48z" fill="#ffc400" stroke="#1a1a1a" stroke-width="7" stroke-linejoin="round"/><text y="22" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="52" fill="#1a1a1a">${glyph}</text></g>`;
const noSign = (x, y, r = 40) => `<g transform="translate(${x},${y})"><circle r="${r}" fill="none" stroke="#d32f2f" stroke-width="10"/><path d="M${-r * .7} ${-r * .7} L${r * .7} ${r * .7}" stroke="#d32f2f" stroke-width="10" stroke-linecap="round"/></g>`;
const cloud = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})" fill="#fff" opacity=".9"><ellipse cx="0" cy="0" rx="40" ry="16"/><ellipse cx="-20" cy="-10" rx="22" ry="16"/><ellipse cx="14" cy="-14" rx="26" ry="18"/></g>`;
const palm = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M0 0 C6 -50 -4 -90 4 -130" stroke="#8a5a2b" stroke-width="12" fill="none" stroke-linecap="round"/><g fill="#2f9e5b"><path d="M4 -130 C-40 -150 -70 -130 -90 -100 C-50 -120 -30 -122 4 -130z"/><path d="M4 -130 C48 -156 84 -136 100 -104 C60 -124 34 -124 4 -130z"/><path d="M4 -130 C-10 -170 10 -192 36 -196 C20 -174 14 -156 4 -130z"/><path d="M4 -130 C-30 -168 -60 -170 -84 -158 C-56 -158 -30 -150 4 -130z"/></g></g>`;

const S = {};

S.slideRide = () => sky() + cloud(120, 60) + cloud(380, 40, .8) +
  `<path d="M30 100 C190 70 250 210 330 235 S470 300 600 300" stroke="#c8402a" stroke-width="78" fill="none" stroke-linecap="round"/><path d="M30 100 C190 70 250 210 330 235 S470 300 600 300" stroke="#ff8a5b" stroke-width="62" fill="none" stroke-linecap="round"/><path d="M30 94 C190 64 250 204 330 229 S470 294 600 294" stroke="#ffc2a1" stroke-width="14" fill="none" stroke-linecap="round" opacity=".7"/>` +
  P(296, 270, 1.15, { pose: 'cross', rot: -64, shirt: '#2bb673', pants: '#3b4a6b' }).replace('rotate(-64)', 'rotate(-64)') +
  `<rect x="0" y="330" width="640" height="70" fill="#1fb5d4"/>` + arrow(90, 40, 210, 70, '#fff') +
  tag(24, 336, 'FEET FIRST', '#0b5cad') + tag(250, 336, 'LIE ON YOUR BACK', '#e8505b');

S.slideTower = () => sky('#9ad9f5') + cloud(100, 70) +
  `<rect x="250" y="120" width="12" height="230" fill="#7a8a99"/><rect x="330" y="120" width="12" height="230" fill="#7a8a99"/><rect x="220" y="110" width="150" height="14" fill="#5b6b7a"/>` +
  `<path d="M60 350 L250 120" stroke="#95a5b3" stroke-width="10"/><path d="M60 350 L250 120" stroke="#cfd8df" stroke-width="4" stroke-dasharray="14 14"/>` +
  `<path d="M370 117 C470 110 520 200 600 260" stroke="#ff8a5b" stroke-width="56" fill="none" stroke-linecap="round"/>` +
  `<rect x="396" y="26" width="64" height="96" rx="12" fill="#222"/><circle cx="428" cy="52" r="15" fill="#5a1313"/><circle cx="428" cy="94" r="17" fill="#26e07a"/><text x="428" y="14" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="18" fill="#222">GO</text>` +
  P(300, 112, 0.95, { shirt: '#0b5cad', pose: 'wave' }) + P(170, 228, 0.7, { shirt: '#f2a900', pants: '#8a4b2a' }) + P(120, 262, 0.7, { shirt: '#e8505b' }) + deck(350) +
  tag(30, 20, 'WAIT FOR THE SIGNAL', '#0b5cad', 290);

S.heightCheck = () => room('#e9f7fb', '#bfe3ea') +
  `<rect x="430" y="40" width="58" height="320" rx="10" fill="#1d9bb8"/>` + [...Array(10)].map((_, i) => `<rect x="430" y="${70 + i * 28}" width="${i % 2 ? 24 : 38}" height="4" fill="#fff"/>`).join('') +
  `<rect x="420" y="108" width="150" height="10" fill="#d32f2f"/><text x="498" y="98" font-family="Liberation Sans,Arial" font-weight="900" font-size="22" fill="#d32f2f">MIN HEIGHT</text>` +
  P(330, 358, 1.0, { shirt: '#ffb703', pants: '#3b4a6b', pose: 'stand' }) +
  `<path d="M300 108 H430" stroke="#d32f2f" stroke-width="5" stroke-dasharray="10 8"/>` + check(560, 220) +
  `<g transform="translate(120,150)"><rect width="150" height="130" rx="14" fill="#fff" stroke="#1d9bb8" stroke-width="6"/><text x="75" y="52" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="800" font-size="26" fill="#1d9bb8">HEIGHT</text><text x="75" y="88" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="800" font-size="26" fill="#1d9bb8">&amp; WEIGHT</text><text x="75" y="116" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="700" font-size="18" fill="#555">LIMITS</text></g>`;

S.splash = () => sky() + water(240) + cloud(120, 60) +
  `<path d="M-20 90 C100 70 150 160 210 200" stroke="#ff8a5b" stroke-width="62" fill="none" stroke-linecap="round"/><path d="M-20 90 C100 70 150 160 210 200" stroke="#c8402a" stroke-width="12" fill="none" opacity=".4" stroke-linecap="round"/>` +
  [[230, 236, 30], [272, 222, 22], [200, 246, 18], [300, 244, 14]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".85"/>`).join('') +
  P(250, 300, 0.9, { pose: 'up', shirt: '#2bb673' }) + water(300, '#1fb5d4').replace('rect y="300"', 'rect y="300" opacity=".55"') +
  arrow(300, 310, 520, 330, '#fff') + `<rect x="540" y="250" width="100" height="150" fill="#cfd8df"/><g stroke="#8794a0" stroke-width="6"><path d="M550 300 v80 M590 300 v80 M550 300 H590"/></g>` +
  tag(300, 20, 'EXIT IMMEDIATELY', '#d32f2f', 270) + tag(24, 340, 'CLEAR THE LANDING ZONE', '#0b5cad', 320);

S.lifeJacket = () => sky() + palm(560, 330, 0.9) + water(220) +
  [60, 150, 240, 330, 420, 510].map((x, i) => `<path d="M${x} 250 q15 -14 30 0" stroke="#fff" stroke-width="5" fill="none" opacity=".7"/>`).join('') +
  `<circle cx="300" cy="228" r="48" fill="#ffd2a1"/><circle cx="300" cy="190" r="30" fill="#f2c18d"/><path d="M270 188 a30 30 0 0 1 60 0z" fill="#2b2118"/>` +
  `<path d="M254 244 q46 -28 92 0 v40 q-46 26 -92 0z" fill="#ff7a00"/><path d="M254 250 q46 -26 92 0" stroke="#fff" stroke-width="7" fill="none"/><path d="M300 224 v54" stroke="#fff" stroke-width="7"/>` +
  `<path d="M254 256 L216 220 M346 256 L384 220" stroke="#f2c18d" stroke-width="14" stroke-linecap="round"/>` +
  `<g transform="translate(500,250)"><circle r="40" fill="#fff"/><circle r="40" fill="none" stroke="#e8505b" stroke-width="16" stroke-dasharray="31 31"/><circle r="16" fill="#1fb5d4"/></g>` + tag(24, 20, 'NON-SWIMMERS: WEAR LIFE JACKET', '#0b5cad', 420) + check(560, 120);

S.lazy = () => sky('#9be0f7') + palm(70, 330, .8) + palm(580, 340, .7) +
  `<ellipse cx="320" cy="250" rx="290" ry="105" fill="#1fb5d4"/><ellipse cx="320" cy="250" rx="150" ry="42" fill="#efe2bd"/><ellipse cx="320" cy="250" rx="290" ry="105" fill="none" stroke="#9ae4f5" stroke-width="8"/>` +
  [[130, 250, '#ff7a59'], [250, 328, '#ffd23f'], [400, 330, '#2bb673'], [520, 250, '#e8505b'], [330, 168, '#7b5cff']].map(([x, y, c]) => `<g><circle cx="${x}" cy="${y}" r="30" fill="${c}"/><circle cx="${x}" cy="${y}" r="14" fill="#1fb5d4"/><circle cx="${x}" cy="${y - 18}" r="12" fill="#f2c18d"/></g>`).join('') +
  `<path d="M180 300 q140 70 260 20" stroke="#fff" stroke-width="7" fill="none" stroke-dasharray="3 14" stroke-linecap="round"/><path d="M450 300 l-24 6 l10 -20z" fill="#fff"/>` + tag(24, 20, 'GO WITH THE FLOW', '#0b5cad', 250) + noSign(560, 120, 34);

S.surf = () => sky('#6ec6f0') +
  `<path d="M0 260 C120 250 180 120 320 130 C430 140 470 260 640 260 V400 H0z" fill="#1d9bd8"/><path d="M0 300 C150 280 250 180 360 210 C450 235 520 300 640 300 V400H0z" fill="#46b8ea"/><path d="M110 180 C200 110 300 100 330 140 C260 130 200 160 140 230z" fill="#fff" opacity=".85"/>` +
  `<g transform="translate(300,238) rotate(-12)"><rect x="-90" y="0" width="180" height="18" rx="9" fill="#ffd23f"/><rect x="-90" y="6" width="180" height="5" fill="#e8505b"/></g>` + P(300, 238, .95, { pose: 'out', shirt: '#e8505b', pants: '#1f3a5f' }) +
  P(540, 340, .8, { pose: 'wave', shirt: '#0b5cad' }) + tag(24, 20, 'LISTEN TO THE COACH', '#0b5cad', 270) + check(560, 110);

S.family = () => sky() + water(250, '#4fd0e8') + palm(70, 250, .6) +
  P(250, 330, 1.2, { shirt: '#0b5cad', pose: 'out' }) + P(350, 330, .7, { shirt: '#ffb703' }) +
  `<path d="M266 258 Q310 238 340 262" stroke="#f2c18d" stroke-width="9" fill="none" stroke-linecap="round"/>` + water(290, '#1fb5d4').replace('<rect', '<rect opacity=".6"') +
  `<path d="M150 200 A180 180 0 0 1 450 200" stroke="#e8505b" stroke-width="6" fill="none" stroke-dasharray="14 10"/><text x="300" y="110" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="34" fill="#c62f3b">ARM'S REACH</text>` +
  `<g transform="translate(500,330)"><circle r="40" fill="#fff"/><path d="M-26 0 q26 -30 52 0 q-26 30 -52 0z" fill="#fff" stroke="#0b5cad" stroke-width="6"/><circle r="11" fill="#0b5cad"/></g>`;

S.wet = () => room('#e6f4f6', '#b9dbe0') +
  `<g stroke="#a7cdd3" stroke-width="3">` + [...Array(8)].map((_, i) => `<path d="M${i * 90} 322 L${i * 90 - 30} 400"/>`).join('') + `</g>` +
  `<ellipse cx="320" cy="368" rx="210" ry="22" fill="#6fd0e6" opacity=".7"/>` +
  `<g transform="translate(150,120)"><path d="M0 220 L70 0 L140 220z" fill="#ffc400" stroke="#1a1a1a" stroke-width="8" stroke-linejoin="round"/><text x="70" y="170" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="30" fill="#1a1a1a">WET</text><text x="70" y="198" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="18" fill="#1a1a1a">FLOOR</text></g>` +
  `<g transform="translate(430,330) rotate(-24)">${P(0, 0, 1, { shirt: '#e8505b', pose: 'out' }).replace(/^<g/, '<g')}</g>` +
  warnTri(560, 70, .8) + tag(24, 20, 'WALK — DO NOT RUN', '#e8505b', 270);

S.noDive = () => sky('#9be0f7') + deck(300).replace('#efe2bd', '#e8dbb0') +
  `<rect x="0" y="300" width="360" height="100" fill="#efe2bd"/><path d="M360 300 H640 V400 H360z" fill="#1fb5d4"/><path d="M360 300 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#9ae4f5" stroke-width="6" fill="none"/>` +
  `<rect x="360" y="340" width="280" height="60" fill="#0e8fb0"/><text x="500" y="378" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="28" fill="#fff">SHALLOW 1.2 m</text>` +
  `<g transform="translate(300,170) rotate(120)">${P(0, 0, 1, { pose: 'up', shirt: '#2bb673' })}</g>` + noSign(300, 190, 90) +
  tag(24, 20, 'CHECK DEPTH — NEVER DIVE', '#d32f2f', 360);

S.lifeguard = () => sky('#8fd8f5') +
  water(300) + `<path d="M410 120 L150 300 H500z" fill="#fff" opacity=".28"/>` +
  `<rect x="300" y="170" width="10" height="140" fill="#b32a2a"/><rect x="380" y="170" width="10" height="140" fill="#b32a2a"/><rect x="290" y="160" width="110" height="14" fill="#e8505b"/>` +
  `<path d="M270 140 Q345 60 420 140z" fill="#e8505b"/><path d="M345 140 V74" stroke="#fff" stroke-width="4"/><path d="M300 140 Q345 100 390 140" stroke="#fff" stroke-width="5" fill="none"/>` +
  P(345, 168, .85, { shirt: '#e8505b', pants: '#e8505b', pose: 'wave' }) +
  `<g fill="#f2c18d"><circle cx="150" cy="320" r="14"/><circle cx="215" cy="334" r="14"/><circle cx="470" cy="326" r="14"/><circle cx="560" cy="342" r="14"/></g>` +
  `<g transform="translate(60,80)"><circle r="32" fill="#fff" stroke="#0b5cad" stroke-width="7"/><circle r="12" fill="#0b5cad"/><path d="M-40 0 Q0 -34 40 0 Q0 34 -40 0z" fill="none" stroke="#0b5cad" stroke-width="5"/></g>` +
  tag(110, 340, '10 SEC: SPOT  •  20 SEC: REACH', '#0b5cad');

S.rescue = () => sky('#9be0f7') + water(210) +
  `<path d="M0 215 q20 -12 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#fff" stroke-width="5" fill="none" opacity=".7"/>` +
  deck(330).replace('<rect y="330"', '<rect x="0" y="330" width="260"').replace('<rect y="330" width="640"', '<rect y="330" width="260"') +
  P(120, 300, 1, { shirt: '#e8505b', pants: '#e8505b', pose: 'out' }) +
  `<g transform="translate(250,318)"><ellipse rx="50" ry="22" fill="#e8505b"/><ellipse rx="28" ry="11" fill="#1fb5d4"/><path d="M-20 -14 l12 0 M12 -14 l12 0" stroke="#fff" stroke-width="6"/></g><path d="M200 310 Q340 260 440 270" stroke="#e8505b" stroke-width="5" fill="none" stroke-dasharray="3 9"/>` +
  `<circle cx="470" cy="262" r="16" fill="#f2c18d"/><path d="M470 280 v26" stroke="#f2c18d" stroke-width="10"/><path d="M470 282 L496 238 M470 282 L440 236" stroke="#f2c18d" stroke-width="9" stroke-linecap="round"/><path d="M448 248 q6 -22 22 -22 q16 0 22 22" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="5 6"/>` +
  warnTri(560, 100, .9) + tag(24, 20, 'DROWNING IS SILENT', '#d32f2f', 300);

S.heat = () => sky('#ffd89b', '#fff3df') +
  `<g transform="translate(150,40)"><rect x="0" y="0" width="64" height="260" rx="32" fill="#fff" stroke="#c33" stroke-width="8"/><rect x="26" y="70" width="12" height="186" fill="#e53935"/><circle cx="32" cy="250" r="44" fill="#e53935" stroke="#c33" stroke-width="8"/></g>` +
  `<text x="260" y="150" font-family="Liberation Sans,Arial" font-weight="900" font-size="84" fill="#e8505b">45°C</text>` +
  `<g transform="translate(470,250)"><path d="M0 -70 C40 -20 60 10 40 44 C28 66 -28 66 -40 44 C-60 10 -40 -20 0 -70z" fill="#33b5e5"/><path d="M-14 12 q8 24 28 20" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/></g>` +
  `<g transform="translate(300,300)"><rect width="60" height="94" rx="12" fill="#33b5e5" transform="translate(-30,-50)"/><rect x="-16" y="-68" width="32" height="22" rx="6" fill="#0b5cad"/></g>` + deck(350);

S.sun = () => sky('#ffcf85', '#fff6e1') +
  `<circle cx="120" cy="100" r="64" fill="#ffd23f"/>` + [...Array(12)].map((_, i) => `<path d="M120 100 L${120 + Math.cos(i / 12 * 6.283) * 96} ${100 + Math.sin(i / 12 * 6.283) * 96}" stroke="#ffd23f" stroke-width="8" stroke-linecap="round"/>`).join('') + `<circle cx="120" cy="100" r="64" fill="#ffd23f"/>` +
  `<path d="M360 120 Q460 20 560 120z" fill="#e8505b"/><path d="M410 120 Q460 60 510 120" stroke="#fff" stroke-width="7" fill="none"/><rect x="456" y="120" width="8" height="220" fill="#8a5a2b"/>` +
  `<g transform="translate(250,250)"><rect width="46" height="100" rx="10" fill="#2bb673"/><rect x="10" y="-22" width="26" height="24" rx="6" fill="#0b5cad"/><text x="23" y="52" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="15" fill="#fff">SPF</text><text x="23" y="74" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="20" fill="#fff">50</text></g>` +
  `<g transform="translate(560,300)"><rect x="-30" y="-50" width="60" height="94" rx="12" fill="#33b5e5"/><rect x="-16" y="-68" width="32" height="22" rx="6" fill="#0b5cad"/></g>` + deck(350).replace('#efe2bd', '#f3dfae');

S.chem = () => room('#eef2f6', '#c3cbd4') +
  `<g transform="translate(70,150)"><rect width="120" height="170" rx="14" fill="#1f6fd1"/><rect y="40" width="120" height="14" fill="#0e4aa0"/><rect y="110" width="120" height="14" fill="#0e4aa0"/><g transform="translate(60,84) rotate(45)"><rect x="-26" y="-26" width="52" height="52" fill="#fff" stroke="#d32f2f" stroke-width="6"/><path d="M-12 -4 h24 M-8 8 h16" stroke="#d32f2f" stroke-width="6"/></g></g>` +
  `<g transform="translate(230,180)"><rect width="100" height="140" rx="12" fill="#f2a900"/><rect y="34" width="100" height="12" fill="#c98200"/><g transform="translate(50,90) rotate(45)"><rect x="-22" y="-22" width="44" height="44" fill="#fff" stroke="#1a1a1a" stroke-width="5"/><text y="9" x="0" text-anchor="middle" font-size="26" font-family="Liberation Sans,Arial" font-weight="900" fill="#1a1a1a" transform="rotate(-45)">!</text></g></g>` +
  `<g transform="translate(400,200)"><path d="M0 40 q20 -50 70 -50 q50 0 70 50 q-30 10 -70 10 q-40 0 -70 -10z" fill="#1d9bb8"/><circle cx="35" cy="22" r="22" fill="none" stroke="#fff" stroke-width="8"/><circle cx="105" cy="22" r="22" fill="none" stroke="#fff" stroke-width="8"/></g>` +
  `<g transform="translate(420,290)"><path d="M0 0 q10 -50 30 -60 q20 10 30 60z M70 0 q10 -50 30 -60 q20 10 30 60z" fill="#2bb673" stroke="#1e8e3e" stroke-width="4"/></g>` +
  tag(24, 20, 'READ THE LABEL • WEAR PPE', '#0b5cad', 360);

S.water = () => room('#e8f6fa', '#bde0e8') +
  `<g transform="translate(110,120)"><path d="M20 0 h50 v60 l50 130 q8 22 -14 22 h-142 q-22 0 -14 -22 l50 -130z" fill="#fff" stroke="#1d9bb8" stroke-width="7"/><path d="M-30 150 h150 l24 62 h-198z" fill="#1fb5d4" opacity=".8"/></g>` +
  `<g transform="translate(360,150)"><path d="M0 -70 C40 -20 60 10 40 44 C28 66 -28 66 -40 44 C-60 10 -40 -20 0 -70z" fill="#33b5e5"/></g>` +
  `<g transform="translate(130,330)"><rect width="380" height="26" rx="13" fill="#eee"/><defs><linearGradient id="ph"><stop offset="0" stop-color="#e53935"/><stop offset=".25" stop-color="#ffb300"/><stop offset=".5" stop-color="#43a047"/><stop offset=".75" stop-color="#1e88e5"/><stop offset="1" stop-color="#5e35b1"/></linearGradient></defs><rect width="380" height="26" rx="13" fill="url(#ph)"/><path d="M200 -14 l-10 -20 h20z" fill="#1a1a1a"/><text x="190" y="-42" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="24" fill="#1a1a1a">pH 7.2 – 7.6</text></g>` + check(540, 150);

S.electric = () => room('#f1f1f6', '#c9c9d6') +
  `<rect x="60" y="100" width="190" height="190" rx="26" fill="#fff" stroke="#9aa" stroke-width="8"/><rect x="108" y="160" width="14" height="46" rx="4" fill="#333"/><rect x="188" y="160" width="14" height="46" rx="4" fill="#333"/><rect x="146" y="226" width="18" height="30" rx="4" fill="#333"/>` +
  `<path d="M360 60 l-60 130 h60 l-30 120 l110 -160 h-64 l50 -90z" fill="#ffc400" stroke="#1a1a1a" stroke-width="8" stroke-linejoin="round"/>` +
  [[470, 150], [520, 220], [560, 120], [500, 290]].map(([x, y]) => `<path d="M${x} ${y - 28} C${x + 18} ${y - 6} ${x + 26} ${y + 6} ${x + 16} ${y + 20} C${x + 8} ${y + 30} ${x - 8} ${y + 30} ${x - 16} ${y + 20} C${x - 26} ${y + 6} ${x - 18} ${y - 6} ${x} ${y - 28}z" fill="#33b5e5"/>`).join('') + noSign(150, 195, 84).replace('stroke-width="10"', 'stroke-width="12"') +
  tag(24, 330, 'WATER + ELECTRICITY = DANGER', '#d32f2f', 420);

S.lockout = () => room('#e9eef2', '#bcc5cd') +
  `<rect x="90" y="40" width="200" height="270" rx="18" fill="#7f8c97"/><rect x="108" y="58" width="164" height="234" rx="12" fill="#a8b4be"/><rect x="170" y="110" width="40" height="110" rx="10" fill="#d32f2f"/><rect x="156" y="120" width="68" height="50" rx="10" fill="#c62828"/>` +
  `<g transform="translate(340,150)"><path d="M26 70 v-34 a42 42 0 0 1 84 0 v34" stroke="#444" stroke-width="16" fill="none"/><rect x="0" y="68" width="136" height="110" rx="16" fill="#f2a900"/><circle cx="68" cy="116" r="14" fill="#333"/><rect x="62" y="116" width="12" height="36" fill="#333"/></g>` +
  `<g transform="translate(486,236) rotate(10)"><rect width="140" height="70" rx="8" fill="#fff" stroke="#d32f2f" stroke-width="6"/><text x="70" y="30" text-anchor="middle" font-size="20" font-weight="900" font-family="Liberation Sans,Arial" fill="#d32f2f">DANGER</text><text x="70" y="56" text-anchor="middle" font-size="13" font-weight="800" font-family="Liberation Sans,Arial" fill="#333">DO NOT OPERATE</text></g>` +
  tag(24, 330, 'LOCK • TAG • TRY', '#0b5cad', 220);

S.height = () => sky('#a9ddf2') +
  `<g stroke="#8794a0" stroke-width="10"><path d="M150 360 V60 M330 360 V60"/><path d="M150 120 H330 M150 220 H330 M150 320 H330"/></g><rect x="130" y="52" width="220" height="12" fill="#5b6b7a"/>` +
  P(240, 226, .9, { shirt: '#f28c28', pants: '#2d3e50', extra: '<rect x="-18" y="-130" width="36" height="16" rx="8" fill="#ffd23f"/><path d="M-14 -96 L14 -52 M14 -96 L-14 -52" stroke="#1a1a1a" stroke-width="5"/>' }) +
  `<path d="M240 130 Q300 100 380 70" stroke="#1a1a1a" stroke-width="5" fill="none"/><circle cx="388" cy="66" r="14" fill="#e8505b"/>` +
  `<g transform="translate(470,200)"><rect width="120" height="84" rx="12" fill="#0b5cad"/><circle cx="60" cy="42" r="26" fill="none" stroke="#fff" stroke-width="6"/><path d="M60 24 v36 M42 42 h36" stroke="#fff" stroke-width="6"/></g>` + deck(360);

S.confined = () => room('#e5e8ec', '#b8bec5') +
  `<g transform="translate(90,70)"><rect width="280" height="260" rx="40" fill="#8f9aa4"/><rect x="20" y="20" width="240" height="220" rx="30" fill="#4b565f"/><g stroke="#cfd6dc" stroke-width="8"><path d="M110 40 v190 M170 40 v190"/><path d="M110 80 h60 M110 130 h60 M110 180 h60"/></g></g>` +
  `<g transform="translate(450,330)" ><path d="M0 0 L60 -200 L120 0" stroke="#444" stroke-width="10" fill="none"/><path d="M60 -200 L60 -130" stroke="#444" stroke-width="6"/><circle cx="60" cy="-120" r="16" fill="#f2a900"/></g>` +
  P(540, 340, .8, { shirt: '#f28c28', extra: '<rect x="-16" y="-130" width="32" height="14" rx="7" fill="#ffd23f"/>' }) +
  `<g transform="translate(40,10)"><rect width="260" height="52" rx="10" fill="#d32f2f"/><text x="130" y="36" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="26" fill="#fff">PERMIT REQUIRED</text></g>`;

S.firstAid = () => room('#f0f7f1', '#c7dccb') +
  `<g transform="translate(70,130)"><rect width="230" height="170" rx="22" fill="#fff" stroke="#1e8e3e" stroke-width="10"/><rect x="85" y="35" width="60" height="100" fill="#1e8e3e"/><rect x="55" y="65" width="120" height="40" fill="#1e8e3e"/><rect x="85" y="-24" width="60" height="30" rx="8" fill="#1e8e3e"/></g>` +
  `<g transform="translate(400,120)"><rect width="190" height="190" rx="24" fill="#26a269"/><path d="M95 160 C20 105 38 52 70 52 C86 52 95 66 95 66 C95 66 104 52 120 52 C152 52 170 105 95 160z" fill="#fff"/><path d="M104 62 l-26 46 h26 l-12 36 l38 -54 h-28z" fill="#26a269"/><text x="95" y="184" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="22" fill="#fff"></text></g>` +
  tag(400, 330, 'AED • CPR READY', '#1e8e3e', 190) + tag(30, 330, 'CALL SECURITY FIRST', '#d32f2f', 280);

S.evac = () => room('#eaf7ee', '#bcd9c3') +
  `<g transform="translate(70,50)"><rect width="300" height="130" rx="14" fill="#1e8e3e"/><text x="90" y="86" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="54" fill="#fff">EXIT</text><g transform="translate(220,66)" fill="#fff"><circle cx="0" cy="-34" r="11"/><path d="M-4 -18 L-24 4 L-8 16 L-26 46 M-4 -18 L22 -8 L36 12 M-4 -18 L8 14 L34 42" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></g>` +
  arrow(110, 230, 330, 230, '#1e8e3e') +
  P(430, 340, .85, { shirt: '#0b5cad' }) + P(500, 340, .85, { shirt: '#e8505b', pose: 'wave' }) + P(560, 340, .6, { shirt: '#ffb703' }) +
  `<g transform="translate(500,70)"><rect width="110" height="110" rx="12" fill="#1e8e3e"/><g fill="#fff"><circle cx="30" cy="38" r="10"/><circle cx="55" cy="30" r="10"/><circle cx="80" cy="38" r="10"/><path d="M14 80 q16 -28 32 0z M39 74 q16 -28 32 0z M64 80 q16 -28 32 0z"/></g></g>`;

S.lost = () => sky('#aee2f5') + palm(90, 340, .8) + deck(340) +
  P(220, 342, .72, { shirt: '#ffb703', pants: '#e8505b', pose: 'up' }) + `<path d="M222 218 Q250 150 330 110" stroke="#444" stroke-width="3" fill="none"/><ellipse cx="338" cy="92" rx="30" ry="38" fill="#e8505b"/><path d="M338 130 l-6 12 h12z" fill="#e8505b"/>` +
  P(420, 342, 1.05, { shirt: '#0b5cad', pose: 'out' }) +
  `<g transform="translate(520,60)"><circle r="42" fill="#fff" stroke="#d32f2f" stroke-width="8"/><text y="14" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="46" fill="#d32f2f">?</text></g>` + tag(24, 20, 'STAY WITH THE CHILD', '#0b5cad', 280);

S.knife = () => room('#f7f3ec', '#d7c9ae') +
  `<rect x="70" y="190" width="400" height="120" rx="16" fill="#c68b4a"/><rect x="80" y="200" width="380" height="100" rx="10" fill="#d9a064"/>` +
  `<g transform="translate(150,240)"><path d="M0 0 q60 -30 130 -14 q8 10 -4 20 q-70 20 -126 -6z" fill="#ff8a1f"/><path d="M130 -14 l20 -6 l-6 16z" fill="#2bb673"/></g>` +
  `<g transform="translate(190,196) rotate(7)"><path d="M0 0 H210 L240 22 L0 38z" fill="#dfe6ec" stroke="#9aa6b0" stroke-width="3"/><rect x="-100" y="0" width="100" height="38" rx="14" fill="#2f2f33"/></g>` +
  `<g transform="translate(480,120)"><path d="M0 70 q0 -50 24 -50 q20 0 20 50 v70 q-22 14 -44 0z" fill="#f2c18d"/><path d="M6 40 q4 -50 14 -40 M24 30 q6 -48 16 -34" stroke="#d9a76b" stroke-width="5" fill="none"/></g>` +
  tag(24, 20, 'SHARP KNIFE = SAFE KNIFE', '#0b5cad', 340) + check(560, 330);

S.burn = () => room('#fbefe4', '#d9bfa2') +
  `<rect x="60" y="270" width="520" height="60" rx="10" fill="#4a4e57"/><circle cx="220" cy="270" r="58" fill="#2a2d33"/>` + flame(190, 290, .7) + flame(220, 292, .8) + flame(250, 290, .7) +
  `<g transform="translate(150,170)"><rect width="150" height="70" rx="12" fill="#c9ced6"/><rect x="-6" y="-6" width="162" height="16" rx="8" fill="#9aa0a8"/><rect x="150" y="26" width="110" height="16" rx="8" fill="#333"/></g>` +
  `<g stroke="#fff" stroke-width="7" fill="none" opacity=".8" stroke-linecap="round"><path d="M170 150 q-16 -26 0 -46 t0 -46"/><path d="M220 150 q-16 -26 0 -46 t0 -46"/><path d="M270 150 q-16 -26 0 -46 t0 -46"/></g>` +
  warnTri(480, 120, 1.0, '!') + `<g transform="translate(430,260)"><path d="M0 70 q0 -70 34 -70 q28 0 28 70 v60 q-30 10 -62 0z" fill="#e8505b"/><rect x="-6" y="44" width="74" height="12" fill="#c7353f"/></g>` + tag(24, 20, 'HOT SURFACES BURN', '#e8505b', 300);

S.fireExt = () => room('#fdeeee', '#e0bcbc') +
  `<g transform="translate(110,70)"><rect x="40" y="20" width="110" height="250" rx="40" fill="#d32f2f"/><rect x="62" y="0" width="66" height="36" rx="8" fill="#333"/><path d="M128 14 q60 -4 70 56" stroke="#333" stroke-width="12" fill="none"/><rect x="40" y="110" width="110" height="80" fill="#fff"/><text x="95" y="162" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="30" fill="#d32f2f">FIRE</text><circle cx="95" cy="64" r="16" fill="#f2a900"/></g>` +
  flame(470, 330, 1.7) + flame(560, 340, 1.1) +
  `<g font-family="Liberation Sans,Arial" font-weight="900"><g transform="translate(330,70)"><circle r="28" fill="#0b5cad"/><text y="12" text-anchor="middle" font-size="34" fill="#fff">P</text></g><text x="364" y="82" font-size="22" fill="#222">ull the pin</text><g transform="translate(330,126)"><circle r="28" fill="#0b5cad"/><text y="12" text-anchor="middle" font-size="34" fill="#fff">A</text></g><text x="364" y="138" font-size="22" fill="#222">im at the base</text><g transform="translate(330,182)"><circle r="28" fill="#0b5cad"/><text y="12" text-anchor="middle" font-size="34" fill="#fff">S</text></g><text x="364" y="194" font-size="22" fill="#222">queeze the handle</text><g transform="translate(330,238)"><circle r="28" fill="#0b5cad"/><text y="12" text-anchor="middle" font-size="34" fill="#fff">S</text></g><text x="364" y="250" font-size="22" fill="#222">weep side to side</text></g>`;

S.food = () => room('#fffaf0', '#e8dcc0') +
  `<g transform="translate(70,60)"><path d="M0 120 q-26 -40 14 -66 q10 -42 60 -34 q40 -38 84 -6 q46 -6 46 40 q34 28 4 66z" fill="#fff" stroke="#d6d6d6" stroke-width="5"/><rect x="14" y="116" width="164" height="60" rx="8" fill="#fff" stroke="#d6d6d6" stroke-width="5"/></g>` +
  `<g transform="translate(330,60)"><rect x="40" y="0" width="30" height="190" rx="15" fill="#fff" stroke="#888" stroke-width="6"/><rect x="48" y="60" width="14" height="120" fill="#e53935"/><circle cx="55" cy="190" r="34" fill="#e53935" stroke="#888" stroke-width="6"/><text x="125" y="70" font-family="Liberation Sans,Arial" font-weight="900" font-size="46" fill="#e53935">75°C</text><text x="125" y="100" font-family="Liberation Sans,Arial" font-weight="800" font-size="18" fill="#555">core temp</text></g>` +
  `<g transform="translate(80,280)" fill="#f2a900"><g><path d="M0 40 q0 -30 14 -40 q14 10 14 40z"/><path d="M14 -4 v44" stroke="#8a5a2b" stroke-width="3"/></g></g>` +
  `<g transform="translate(220,300)"><path d="M0 30 q10 -50 40 -50 q30 0 40 50 q-40 20 -80 0z" fill="#c68b4a"/></g>` +
  `<g transform="translate(340,290)"><path d="M0 0 h50 v50 q-25 18 -50 0z" fill="#fff" stroke="#888" stroke-width="5"/><path d="M0 8 h50" stroke="#33b5e5" stroke-width="10"/></g>` +
  `<g transform="translate(480,280)"><circle r="42" fill="#e8505b"/><path d="M-20 -4 l14 14 l28 -30" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;

S.lifting = () => room('#eef0f5', '#c5c9d4') +
  `<g transform="translate(320,330)"><rect x="-70" y="-110" width="140" height="110" rx="6" fill="#c68b4a"/><path d="M-70 -80 h140" stroke="#a36f35" stroke-width="6"/></g>` +
  `<g transform="translate(250,330)"><path d="M0 -4 L-32 -78" stroke="#2d3e50" stroke-width="22" stroke-linecap="round"/><path d="M-20 -50 L-52 -4" stroke="#2d3e50" stroke-width="22" stroke-linecap="round"/><rect x="-70" y="-168" width="50" height="108" rx="14" fill="#0b5cad" transform="rotate(14 -45 -114)"/><circle cx="-34" cy="-186" r="14" fill="#f2c18d"/><path d="M-20 -150 L40 -100" stroke="#f2c18d" stroke-width="12" stroke-linecap="round"/></g>` +
  check(520, 120) + tag(24, 20, 'BEND KNEES • BACK STRAIGHT', '#0b5cad', 360) + `<g transform="translate(470,240)"><rect width="130" height="70" rx="10" fill="#fff" stroke="#0b5cad" stroke-width="5"/><text x="65" y="32" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="20" fill="#0b5cad">TOO HEAVY?</text><text x="65" y="56" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="800" font-size="18" fill="#e8505b">GET HELP</text></g>`;

S.trolley = () => room('#f1f4f7', '#cbd2da') +
  `<g transform="translate(110,100)"><rect x="0" y="0" width="360" height="40" rx="8" fill="#e6e9ee" stroke="#9aa" stroke-width="5"/><rect x="0" y="40" width="360" height="130" fill="#d0d6dd" stroke="#9aa" stroke-width="5"/><g fill="#fff"><rect x="14" y="52" width="100" height="40" rx="6"/><rect x="14" y="98" width="100" height="40" rx="6"/></g><rect x="150" y="48" width="90" height="116" rx="10" fill="#2bb673"/><rect x="258" y="48" width="90" height="116" rx="10" fill="#33b5e5"/><circle cx="40" cy="200" r="22" fill="#333"/><circle cx="320" cy="200" r="22" fill="#333"/></g>` +
  `<g transform="translate(500,230)"><rect x="0" y="0" width="52" height="100" rx="12" fill="#ff7a59"/><rect x="12" y="-26" width="28" height="28" rx="6" fill="#333"/><path d="M40 -22 l30 -10" stroke="#333" stroke-width="8"/></g>` + warnTri(560, 100, .8) + tag(24, 20, 'PUSH — NEVER PULL', '#0b5cad', 260);

S.laundry = () => room('#eef2f8', '#c9d1de') +
  `<g transform="translate(120,60)"><rect width="260" height="280" rx="20" fill="#e6e9ee" stroke="#9aa" stroke-width="7"/><rect x="0" y="0" width="260" height="60" rx="20" fill="#cfd5de"/><circle cx="130" cy="170" r="84" fill="#9ec9d9" stroke="#8794a0" stroke-width="14"/><circle cx="130" cy="170" r="60" fill="#6fb5d0"/><path d="M90 160 q20 -24 40 0 t40 0" stroke="#fff" stroke-width="7" fill="none"/></g>` +
  `<g stroke="#bbb" stroke-width="8" fill="none" stroke-linecap="round" opacity=".9"><path d="M420 150 q-18 -26 0 -50 t0 -50"/><path d="M470 160 q-18 -26 0 -50 t0 -50"/></g>` + warnTri(520, 270, 1, '✋'.slice(0, 0) || '!') + tag(24, 20, 'GUARDS ON • HANDS OUT', '#f2a900', 330).replace('fill="#fff">', 'fill="#1a1a1a">');

S.tools = () => room('#f5f2ee', '#d3c8b6') +
  `<g transform="translate(120,40)"><path d="M0 330 L70 0 H110 L180 330" stroke="#e8505b" stroke-width="12" fill="none" stroke-linejoin="round"/><g stroke="#e8505b" stroke-width="10"><path d="M14 270 H166 M26 200 H154 M38 130 H142 M50 60 H130"/></g></g>` +
  P(250, 340, .84, { shirt: '#2a6fb0', extra: '<rect x="-16" y="-130" width="32" height="14" rx="7" fill="#ffd23f"/>' }) +
  `<g transform="translate(420,200)"><rect width="170" height="120" rx="16" fill="#d32f2f"/><rect x="50" y="-22" width="70" height="30" rx="10" fill="none" stroke="#a82020" stroke-width="10"/><rect x="0" y="52" width="170" height="10" fill="#a82020"/><rect x="72" y="44" width="26" height="26" rx="4" fill="#ffd23f"/></g>` +
  check(530, 120) + tag(24, 20, '3 POINTS OF CONTACT', '#0b5cad', 290);

S.hotwork = () => room('#f4eee8', '#d3c0b0') +
  P(220, 350, 1, { shirt: '#6b4a2a', pants: '#3a3a3a', pose: 'out', extra: '<path d="M-20 -128 h40 v26 h-40z" fill="#222"/><rect x="-14" y="-122" width="28" height="12" fill="#9fd" opacity=".9"/>' }) +
  `<path d="M270 262 L360 280" stroke="#888" stroke-width="10" stroke-linecap="round"/>` + [...Array(14)].map((_, i) => `<circle cx="${370 + (i % 5) * 18 + Math.cos(i) * 14}" cy="${268 + (i * 7) % 40 - 20}" r="4" fill="#ffc83d"/>`).join('') +
  `<circle cx="372" cy="278" r="16" fill="#fff"/>` +
  `<g transform="translate(500,100)"><rect x="12" y="20" width="64" height="200" rx="26" fill="#d32f2f"/><rect x="26" y="0" width="36" height="28" rx="6" fill="#333"/></g>` + warnTri(80, 90, .9) + tag(24, 330, 'HOT WORK PERMIT + FIRE WATCH', '#f2a900', 420).replace('fill="#fff">', 'fill="#1a1a1a">');

S.reception = () => room('#fbf6ee', '#d8c8a8') +
  `<rect x="60" y="230" width="520" height="130" rx="14" fill="#7a4e2b"/><rect x="60" y="220" width="520" height="22" rx="8" fill="#a06a3a"/>` +
  P(320, 230, 1.0, { shirt: '#1b2a49', pants: '#1b2a49' }) +
  `<g transform="translate(140,190)"><path d="M0 30 q0 -30 30 -30 q30 0 30 30z" fill="#f2c18d" stroke="#c9a46b" stroke-width="4"/><rect x="-4" y="30" width="68" height="8" rx="4" fill="#c9a46b"/></g>` +
  `<g transform="translate(470,160)"><rect width="70" height="58" rx="10" fill="#333"/><circle cx="35" cy="28" r="14" fill="#fff"/><path d="M35 20 v10 l8 6" stroke="#333" stroke-width="4" fill="none"/></g>` +
  `<g transform="translate(560,100)"><circle r="42" fill="#d32f2f"/><path d="M-20 -16 q14 -14 20 -2 l6 8 l-8 8 q10 20 22 24 l8 -8 l8 6 q12 6 -2 20 q-22 12 -56 -22 q-22 -26 2 -34z" fill="#fff" transform="scale(.7) translate(0 6)"/></g>` + tag(24, 20, 'GREET • INFORM • ESCALATE', '#0b5cad', 340);

S.security = () => room('#eaeff7', '#bdc7d8') +
  `<g transform="translate(70,60)"><path d="M130 0 L260 40 V170 q0 90 -130 140 q-130 -50 -130 -140 V40z" fill="#0b5cad"/><path d="M130 24 L238 56 V168 q0 70 -108 114 q-108 -44 -108 -114 V56z" fill="#1976d2"/><path d="M70 160 l44 46 l82 -96" stroke="#fff" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>` +
  `<g transform="translate(400,100)"><rect width="150" height="64" rx="14" fill="#333"/><circle cx="110" cy="32" r="22" fill="#111"/><circle cx="110" cy="32" r="10" fill="#5ad"/><rect x="60" y="64" width="30" height="40" fill="#555"/></g>` +
  `<g transform="translate(430,230)"><rect width="76" height="112" rx="12" fill="#222"/><rect x="10" y="12" width="56" height="34" rx="4" fill="#5ad"/><circle cx="38" cy="78" r="14" fill="#d32f2f"/><rect x="30" y="-34" width="10" height="38" fill="#222"/></g>`;

S.spa = () => room('#eff8f7', '#c2dcda') +
  `<g transform="translate(70,150)"><path d="M0 40 H400 q0 130 -80 140 H80 q-80 -10 -80 -140z" fill="#f2f4f7" stroke="#aeb7c2" stroke-width="7"/><path d="M14 40 H386 v34 q-80 22 -186 22 q-106 0 -186 -22z" fill="#5ed0e0"/>` + [60, 140, 220, 300].map((x, i) => `<circle cx="${x}" cy="${44 + (i % 2) * 8}" r="${10 - (i % 2) * 3}" fill="#fff" opacity=".8"/>`).join('') + `</g>` +
  `<g stroke="#bbb" stroke-width="7" fill="none" stroke-linecap="round"><path d="M150 140 q-16 -22 0 -40 t0 -40"/><path d="M250 140 q-16 -22 0 -40 t0 -40"/></g>` +
  `<g transform="translate(520,120)"><rect x="0" y="0" width="50" height="200" rx="25" fill="#fff" stroke="#c33" stroke-width="7"/><rect x="21" y="60" width="9" height="130" fill="#e53935"/><circle cx="25" cy="200" r="32" fill="#e53935" stroke="#c33" stroke-width="7"/><text x="25" y="-12" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="26" fill="#c33">MAX 40°C</text></g>`;

S.gym = () => room('#f1f2f6', '#c5c8d2') +
  `<g transform="translate(60,220)"><rect x="0" y="0" width="28" height="90" rx="8" fill="#333"/><rect x="28" y="26" width="140" height="38" fill="#999"/><rect x="168" y="0" width="28" height="90" rx="8" fill="#333"/></g>` +
  `<g transform="translate(330,100)"><path d="M0 230 L150 0 H190" stroke="#4a4e57" stroke-width="16" fill="none" stroke-linecap="round"/><rect x="-10" y="226" width="240" height="26" rx="8" fill="#2a2d33"/><rect x="130" y="-20" width="110" height="60" rx="10" fill="#2f353d"/><rect x="146" y="-8" width="78" height="30" rx="4" fill="#5ad"/></g>` +
  `<g transform="translate(260,330)"><rect width="110" height="40" rx="10" fill="#33b5e5"/><path d="M0 14 h110" stroke="#fff" stroke-width="5" opacity=".6"/></g>` + check(540, 80) + tag(24, 20, 'WARM UP • SAFE WEIGHTS', '#0b5cad', 300);

S.beach = () => sky('#7ad0f0', '#e7f8ff') + cloud(140, 70) +
  `<rect y="190" width="640" height="90" fill="#1d9bd8"/><path d="M0 190 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#fff" stroke-width="5" fill="none"/><path d="M0 280 C160 262 480 262 640 280 V400 H0z" fill="#f3dfae"/>` +
  `<rect x="330" y="80" width="8" height="260" fill="#8a5a2b"/><path d="M338 86 h110 l-26 24 l26 24 h-110z" fill="#2bb673"/><path d="M338 134 h110 l-26 24 l26 24 h-110z" fill="#ffd23f"/><path d="M338 182 h110 l-26 24 l26 24 h-110z" fill="#d32f2f"/>` +
  `<g transform="translate(90,290)"><rect width="150" height="22" rx="10" fill="#fff"/><rect x="0" y="22" width="12" height="30" fill="#bbb"/><rect x="138" y="22" width="12" height="30" fill="#bbb"/><path d="M0 0 L40 -52 H70" stroke="#fff" stroke-width="14" fill="none"/></g>` +
  `<path d="M520 270 Q580 190 640 270z" fill="#e8505b"/><rect x="576" y="270" width="6" height="80" fill="#8a5a2b"/>` + tag(24, 330, 'GREEN: SWIM   YELLOW: CAUTION   RED: NO SWIM', '#0b5cad', 590).replace('font-size="22"', 'font-size="17"');

S.glass = () => room('#f3f3f5', '#cfd0d6') +
  `<g transform="translate(90,170)"><path d="M0 130 L60 0 L90 90 L130 20 L170 120 L90 150z" fill="#bfe9f5" stroke="#6bb5cc" stroke-width="5" stroke-linejoin="round" opacity=".9"/><path d="M200 140 L240 40 L270 130z" fill="#bfe9f5" stroke="#6bb5cc" stroke-width="5"/></g>` +
  `<g transform="translate(430,180)"><path d="M0 40 q0 -60 40 -60 q40 0 40 60 v90 q-40 20 -80 0z" fill="#f2a900"/><rect x="-6" y="70" width="92" height="14" fill="#c98200"/></g>` +
  `<g transform="translate(470,60)"><rect width="110" height="90" rx="8" fill="#ffd23f" stroke="#1a1a1a" stroke-width="5"/><text x="55" y="38" text-anchor="middle" font-size="22" font-weight="900" font-family="Liberation Sans,Arial" fill="#1a1a1a">SHARPS</text><text x="55" y="64" text-anchor="middle" font-size="16" font-weight="800" font-family="Liberation Sans,Arial" fill="#1a1a1a">BIN</text></g>` + warnTri(90, 70, .9) + noSign(560, 300, 34);

S.tray = () => room('#faf5f0', '#dccbb4') +
  P(300, 340, 1.1, { shirt: '#fff', pants: '#222', pose: 'stand', extra: '<path d="M14 -92 L56 -128" stroke="#f2c18d" stroke-width="9" stroke-linecap="round"/><rect x="26" y="-134" width="96" height="8" rx="4" fill="#bbb"/><g fill="#9ae4f5"><path d="M40 -134 l4 -26 h14 l4 26z"/><path d="M72 -134 l4 -26 h14 l4 26z"/></g>' }) +
  `<g transform="translate(470,150)"><path d="M0 220 L70 0 L140 220z" fill="#ffc400" stroke="#1a1a1a" stroke-width="7" stroke-linejoin="round"/><text x="70" y="168" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="26" fill="#1a1a1a">WET</text></g>` +
  `<g stroke="#bbb" stroke-width="4"><path d="M0 330 L640 330"/></g>` + tag(24, 20, 'EYES UP • TRAY STEADY', '#0b5cad', 300);

S.storage = () => room('#f2eee8', '#d1c6b2') +
  `<g transform="translate(70,60)"><rect width="440" height="270" fill="none" stroke="#5b6b7a" stroke-width="10"/><path d="M0 90 H440 M0 180 H440" stroke="#5b6b7a" stroke-width="10"/>` +
  [[20, 190, 90, 70, '#c68b4a'], [120, 190, 90, 70, '#c68b4a'], [220, 190, 70, 70, '#c68b4a'], [310, 200, 100, 60, '#9a6a35'], [30, 105, 80, 66, '#d9a064'], [130, 105, 100, 66, '#d9a064'], [250, 112, 70, 60, '#e0b378'], [30, 18, 60, 66, '#e9c28f'], [120, 28, 80, 54, '#e9c28f']].map(([x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${c}" stroke="#7a5120" stroke-width="3"/>`).join('') + `</g>` +
  `<g transform="translate(520,60)"><rect width="100" height="80" rx="10" fill="#fff" stroke="#0b5cad" stroke-width="5"/><text x="50" y="34" text-anchor="middle" font-size="16" font-weight="900" font-family="Liberation Sans,Arial" fill="#0b5cad">HEAVY</text><text x="50" y="58" text-anchor="middle" font-size="16" font-weight="900" font-family="Liberation Sans,Arial" fill="#0b5cad">= LOW</text></g>` + check(570, 220);

S.garden = () => sky('#bfe8f5') + palm(110, 340, 1) + palm(240, 350, .7) + deck(340).replace('#efe2bd', '#7ec26a') +
  `<g transform="translate(400,170)"><rect width="52" height="130" rx="12" fill="#2bb673"/><rect x="14" y="-24" width="24" height="24" rx="6" fill="#333"/><path d="M26 -20 l36 -14 h24" stroke="#333" stroke-width="7" fill="none"/></g>` +
  `<g transform="translate(500,160) rotate(12)"><rect x="0" y="0" width="9" height="180" fill="#8a5a2b"/><path d="M-26 170 h60 l-8 40 h-44z" fill="#8794a0"/></g>` + warnTri(560, 80, .75) + tag(24, 20, 'HYDRATE • SHADE • GLOVES', '#2bb673', 320);

S.buggy = () => sky('#bfe8f5') + palm(90, 330, .8) + deck(330).replace('#efe2bd', '#d9c9a0') +
  `<g transform="translate(150,170)"><rect x="0" y="40" width="300" height="70" rx="20" fill="#0b5cad"/><rect x="40" y="0" width="190" height="14" rx="6" fill="#444"/><path d="M50 14 v40 M220 14 v40" stroke="#444" stroke-width="7"/><rect x="40" y="52" width="120" height="30" rx="6" fill="#e9eef3"/><circle cx="70" cy="124" r="32" fill="#222"/><circle cx="70" cy="124" r="13" fill="#bbb"/><circle cx="240" cy="124" r="32" fill="#222"/><circle cx="240" cy="124" r="13" fill="#bbb"/></g>` +
  P(220, 258, .55, { shirt: '#f2a900' }) +
  `<g transform="translate(540,110)"><circle r="54" fill="#fff" stroke="#d32f2f" stroke-width="12"/><text y="18" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="52" fill="#222">10</text></g>` + tag(24, 20, 'SLOW • SOBER • SEATBELT', '#0b5cad', 340);

S.kids = () => sky('#d4f1fb') + deck(330).replace('#efe2bd', '#f7e3b8') +
  P(320, 340, 1.1, { shirt: '#2bb673', pose: 'out' }) + P(190, 340, .6, { shirt: '#e8505b', pose: 'up' }) + P(250, 342, .55, { shirt: '#ffb703' }) + P(410, 342, .55, { shirt: '#7b5cff', pose: 'up' }) + P(470, 340, .6, { shirt: '#33b5e5' }) +
  `<g fill="#e8505b"><path d="M320 54 c-18 -22 -48 -2 -28 22 l28 26 l28 -26 c20 -24 -10 -44 -28 -22z"/></g>` + tag(24, 20, 'COUNT • WATCH • PROTECT', '#0b5cad', 320);

S.office = () => room('#f0f4f8', '#c8d2de') +
  `<rect x="120" y="230" width="360" height="16" rx="6" fill="#a06a3a"/><rect x="140" y="246" width="12" height="90" fill="#7a4e2b"/><rect x="448" y="246" width="12" height="90" fill="#7a4e2b"/>` +
  `<rect x="210" y="120" width="180" height="112" rx="10" fill="#2a2d33"/><rect x="222" y="132" width="156" height="88" fill="#5ad"/><rect x="290" y="232" width="20" height="0" fill="#2a2d33"/>` +
  `<g transform="translate(130,200)"><rect width="46" height="12" rx="4" fill="#444"/></g>` +
  `<g transform="translate(520,120)"><path d="M-30 0 q30 -34 60 0 q-30 34 -60 0z" fill="#fff" stroke="#0b5cad" stroke-width="6"/><circle r="9" fill="#0b5cad"/><text y="62" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="20" fill="#0b5cad">20-20-20</text></g>` +
  `<g transform="translate(80,330)"><circle r="20" fill="#333"/><rect x="-6" y="-70" width="12" height="70" fill="#555"/><rect x="-36" y="-110" width="72" height="44" rx="12" fill="#0b5cad"/></g>` + check(540, 300);

S.ppe = () => room('#eef2f7', '#c3cbd8') +
  `<g transform="translate(60,150)"><path d="M0 70 q0 -70 80 -70 q80 0 80 70z" fill="#ffd23f"/><rect x="-14" y="70" width="188" height="16" rx="8" fill="#e5b400"/><rect x="66" y="-8" width="28" height="40" rx="6" fill="#e5b400"/></g>` +
  `<g transform="translate(270,130)"><path d="M0 0 h40 l20 40 h40 l20 -40 h40 v190 h-160z" fill="#ff7a00"/><rect x="20" y="70" width="140" height="22" fill="#e9eef3"/><rect x="20" y="120" width="140" height="22" fill="#e9eef3"/></g>` +
  `<g transform="translate(480,160)"><path d="M0 100 q0 -90 30 -90 q20 0 24 70 q16 -20 28 -4 q10 14 -4 40 q-14 34 -40 40 q-38 0 -38 -56z" fill="#2bb673" stroke="#1e8e3e" stroke-width="4"/></g>` +
  `<g transform="translate(70,300)"><path d="M0 0 h54 v40 h60 v26 h-114z" fill="#6b4a2a"/><rect y="56" width="114" height="10" fill="#222"/></g>` +
  `<g transform="translate(250,310)"><path d="M0 20 q0 -20 24 -20 q24 0 24 20 q0 20 -24 20 q-24 0 -24 -20z M80 20 q0 -20 24 -20 q24 0 24 20 q0 20 -24 20 q-24 0 -24 -20z" fill="none" stroke="#1d9bb8" stroke-width="8"/><path d="M48 20 h32" stroke="#1d9bb8" stroke-width="8"/></g>` +
  tag(24, 20, 'RIGHT PPE • EVERY TIME', '#0b5cad', 300);

S.report = () => room('#f6f6fb', '#d0d0e0') +
  `<g transform="translate(110,50)"><rect width="260" height="310" rx="20" fill="#5b6b7a"/><rect x="18" y="26" width="224" height="266" rx="10" fill="#fff"/><rect x="85" y="-14" width="90" height="40" rx="12" fill="#333"/>` + [0, 1, 2, 3].map(i => `<g transform="translate(40,${70 + i * 54})"><rect width="30" height="30" rx="6" fill="none" stroke="#0b5cad" stroke-width="5"/>${i < 3 ? '<path d="M7 16 l8 8 l14 -18" stroke="#1e8e3e" stroke-width="6" fill="none" stroke-linecap="round"/>' : ''}<rect x="50" y="9" width="${120 - i * 10}" height="12" rx="6" fill="#cdd5df"/></g>`).join('') + `</g>` +
  warnTri(470, 120, 1.15) + `<g transform="translate(470,270)"><rect width="110" height="76" rx="16" fill="#0b5cad"/><path d="M10 14 l45 34 l45 -34" stroke="#fff" stroke-width="7" fill="none"/></g>` + tag(24, 20, 'SEE IT • SAY IT • FIX IT', '#d32f2f', 300);

S.stop = () => room('#fdf0f0', '#e2bfbf') +
  `<g transform="translate(320,190)"><path d="M-70 -170 H70 L170 -70 V70 L70 170 H-70 L-170 70 V-70z" fill="#d32f2f" stroke="#fff" stroke-width="10"/><path d="M-70 -170 H70 L170 -70 V70 L70 170 H-70 L-170 70 V-70z" fill="none" stroke="#a82020" stroke-width="4" transform="scale(.94)"/><text y="-8" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="82" fill="#fff">STOP</text><text y="50" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="800" font-size="30" fill="#fff">WORK</text></g>` +
  P(80, 340, .85, { shirt: '#f28c28', pose: 'wave' }) + P(570, 340, .85, { shirt: '#0b5cad', pose: 'wave' });

S.hygiene = () => room('#eaf8fb', '#bfe0e8') +
  `<path d="M200 60 h160 v40 h-60 v60 h-40 v-60 h-60z" fill="#8794a0" opacity="0"/><path d="M250 60 h90 q30 0 30 30 v10 h-40 v-14 h-80z" fill="#9aa6b0"/><path d="M290 110 q-6 40 0 70 m24 -70 q-6 40 0 70 m24 -70 q-6 40 0 70" stroke="#33b5e5" stroke-width="7" stroke-linecap="round" fill="none"/>` +
  `<g transform="translate(180,190)"><path d="M0 100 q0 -90 30 -90 q20 0 24 70 q16 -20 28 -4 q10 14 -4 40 q-14 34 -40 40 q-38 0 -38 -56z" fill="#f2c18d"/></g><g transform="translate(300,190)"><path d="M0 100 q0 -90 30 -90 q20 0 24 70 q16 -20 28 -4 q10 14 -4 40 q-14 34 -40 40 q-38 0 -38 -56z" fill="#f2c18d"/></g>` +
  [[160, 200, 22], [240, 180, 14], [360, 200, 20], [420, 250, 26], [180, 300, 18], [330, 320, 16]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#9ae4f5" stroke-width="4"/>`).join('') +
  `<g transform="translate(540,200)"><circle r="64" fill="#0b5cad"/><text y="12" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="54" fill="#fff">20</text><text y="42" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="800" font-size="20" fill="#fff">SECONDS</text></g>`;

S.phone = () => room('#fff4f2', '#e6c4be') +
  `<g transform="translate(225,40)"><rect width="190" height="320" rx="34" fill="#222"/><rect x="12" y="34" width="166" height="250" rx="16" fill="#d32f2f"/><circle cx="95" cy="124" r="54" fill="#fff"/><path d="M68 100 q10 -12 18 -2 l8 14 l-10 9 q8 18 20 24 l9 -9 l14 8 q9 9 -4 19 q-28 12 -54 -18 q-22 -28 -1 -45z" fill="#d32f2f"/><text x="95" y="226" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="24" fill="#fff">SECURITY</text><text x="95" y="256" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="24" fill="#fff">DUTY</text></g>` +
  [1, 2, 3].map(i => `<path d="M${445 + i * 26} ${200 - i * 34} a${i * 34} ${i * 34} 0 0 1 0 ${i * 68}" stroke="#d32f2f" stroke-width="9" fill="none" stroke-linecap="round" opacity="${1.1 - i * .28}"/><path d="M${195 - i * 26} ${200 - i * 34} a${i * 34} ${i * 34} 0 0 0 0 ${i * 68}" stroke="#d32f2f" stroke-width="9" fill="none" stroke-linecap="round" opacity="${1.1 - i * .28}"/>`).join('');

S.allergen = () => room('#fff8f1', '#e8d9c0') +
  `<g transform="translate(60,120)"><circle cx="100" cy="100" r="100" fill="#fff" stroke="#dcdcdc" stroke-width="8"/><circle cx="100" cy="100" r="68" fill="#f7f7f7" stroke="#e6e6e6" stroke-width="4"/>` +
  `<ellipse cx="100" cy="104" rx="38" ry="46" fill="#fff" stroke="#ccc" stroke-width="3"/><circle cx="100" cy="108" r="19" fill="#ffc83d"/></g>` +
  `<g transform="translate(330,110)"><path d="M10 120 q0 -50 60 -50 q60 0 60 50 q0 50 -60 50 q-60 0 -60 -50z" fill="#c98f4a"/><path d="M40 100 q30 -20 60 0" stroke="#a36f35" stroke-width="5" fill="none"/></g>` +
  `<g transform="translate(330,250)"><rect width="56" height="86" rx="6" fill="#fff" stroke="#33b5e5" stroke-width="6"/><path d="M0 26 h56" stroke="#33b5e5" stroke-width="10"/></g>` +
  `<g transform="translate(430,260)"><ellipse cx="50" cy="40" rx="44" ry="22" fill="#6bb5cc"/><path d="M92 40 l36 -22 v44z" fill="#6bb5cc"/><circle cx="26" cy="34" r="5" fill="#fff"/></g>` +
  `<g transform="translate(500,120)"><path d="M30 190 V40" stroke="#c98f00" stroke-width="7"/>` + [0, 1, 2, 3].map(i => `<ellipse cx="14" cy="${50 + i * 34}" rx="9" ry="16" fill="#f2c14b" transform="rotate(-24 14 ${50 + i * 34})"/><ellipse cx="46" cy="${50 + i * 34}" rx="9" ry="16" fill="#f2c14b" transform="rotate(24 46 ${50 + i * 34})"/>`).join('') + `</g>` +
  warnTri(580, 70, .7) + tag(24, 20, 'ASK • CHECK • CONFIRM', '#d32f2f');

S.ticket = () => sky('#9be0f7') + cloud(120, 60) + palm(580, 340, .8) + deck(340) +
  `<g transform="translate(70,130)"><rect width="260" height="210" fill="#fff" stroke="#0b5cad" stroke-width="7"/><path d="M-14 0 h288 l-22 -52 h-244z" fill="#e8505b"/><path d="M26 -52 l-12 52 M78 -52 l-6 52 M130 -52 v52 M182 -52 l6 52 M234 -52 l12 52" stroke="#fff" stroke-width="12"/><rect x="40" y="40" width="180" height="90" fill="#cfeaf5" stroke="#0b5cad" stroke-width="6"/><rect x="0" y="140" width="260" height="14" fill="#0b5cad"/></g>` + P(200, 218, .6, { shirt: '#0b5cad' }) +
  P(430, 342, .9, { shirt: '#ffb703' }) + P(500, 342, .55, { shirt: '#e8505b', pose: 'up' }) +
  `<g transform="translate(540,200)"><circle r="34" fill="none" stroke="#2bb673" stroke-width="16"/><rect x="-8" y="-44" width="16" height="12" fill="#1e8e3e"/></g>` + tag(24, 20, 'BRIEF • BAND • DIRECT', '#0b5cad');

S.hotelpool = () => sky('#a9e0f4') + palm(70, 340, .8) +
  `<rect x="80" y="250" width="480" height="150" rx="10" fill="#1fb5d4"/><rect x="80" y="244" width="480" height="14" fill="#efe2bd"/><path d="M110 270 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#9ae4f5" stroke-width="6" fill="none"/>` +
  `<g stroke="#bfc7cf" stroke-width="8" fill="none"><path d="M470 210 v70 M510 210 v70 M470 220 q20 -26 40 0"/></g>` +
  `<g transform="translate(90,170)"><rect width="110" height="16" rx="8" fill="#fff"/><path d="M0 0 l28 -34 h30" stroke="#fff" stroke-width="12" fill="none"/></g><path d="M300 190 Q360 120 420 190z" fill="#e8505b"/><rect x="356" y="190" width="7" height="60" fill="#8a5a2b"/>` +
  `<g transform="translate(560,110)"><circle r="46" fill="#fff" stroke="#d32f2f" stroke-width="10"/><path d="M-12 -24 h24 v8 h-8 l10 22 v30 h-28 v-30 l10 -22 h-8z" fill="#8a5a2b"/><path d="M-32 -32 L32 32" stroke="#d32f2f" stroke-width="10"/></g>` + tag(24, 20, 'SUPERVISE • SHOWER • SWIM SAFE', '#0b5cad');

S.evacHotel = () => sky('#b9d9ee', '#f0f7fb') +
  `<rect x="60" y="60" width="300" height="290" fill="#e9dcc3" stroke="#a79273" stroke-width="6"/>` + [0, 1, 2].map(r => [0, 1, 2, 3].map(c => `<rect x="${84 + c * 68}" y="${84 + r * 80}" width="46" height="54" fill="${(r === 0 && c === 2) ? '#555' : '#8ec3e0'}" stroke="#a79273" stroke-width="4"/>`).join('')).join('') +
  `<g opacity=".85" fill="#777"><circle cx="250" cy="60" r="26"/><circle cx="284" cy="38" r="22"/><circle cx="318" cy="18" r="18"/></g>` + flame(224, 138, .5) +
  deck(350) + P(430, 352, .85, { shirt: '#0b5cad' }) + P(490, 352, .85, { shirt: '#e8505b', pose: 'wave' }) + P(548, 352, .6, { shirt: '#ffb703' }) +
  `<g transform="translate(470,60)"><rect width="130" height="130" rx="14" fill="#1e8e3e"/><g fill="#fff"><circle cx="38" cy="46" r="11"/><circle cx="65" cy="38" r="11"/><circle cx="92" cy="46" r="11"/><path d="M20 98 q18 -30 36 0z M47 92 q18 -30 36 0z M74 98 q18 -30 36 0z"/></g></g>` +
  `<g transform="translate(380,330)"><path d="M0 0 h40" stroke="#fff" stroke-width="8"/></g>` + tag(24, 20, 'ALARM = LEAVE NOW', '#d32f2f');

S.umbrella = () => sky('#8ed6f4') + cloud(130, 70) +
  `<rect y="230" width="640" height="60" fill="#1d9bd8"/><path d="M0 290 C160 272 480 272 640 290 V400 H0z" fill="#f3dfae"/>` +
  `<path d="M180 200 Q300 70 420 200z" fill="#e8505b"/><path d="M240 200 Q300 120 360 200" stroke="#fff" stroke-width="8" fill="none"/><rect x="296" y="200" width="9" height="150" fill="#8a5a2b"/><path d="M276 350 h50 l-8 18 h-34z" fill="#9a8a6a"/>` +
  [60, 110, 160].map((y, i) => `<path d="M${20 + i * 30} ${y} h120" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-dasharray="26 14"/><path d="M${470 - i * 20} ${y + 20} h110" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-dasharray="26 14"/>`).join('') +
  `<g transform="translate(500,300)"><rect width="110" height="20" rx="10" fill="#fff"/><path d="M0 0 l30 -36 h26" stroke="#fff" stroke-width="12" fill="none"/></g>` + check(110, 300) + tag(24, 20, 'ANCHOR DEEP • CLOSE IN WIND', '#0b5cad');

S.receiving = () => room('#eef0f4', '#c9cdd6') +
  `<rect x="0" y="40" width="250" height="290" fill="#cfd6df" stroke="#8794a0" stroke-width="6"/><rect x="20" y="70" width="210" height="230" fill="#3a4350"/><rect x="0" y="300" width="250" height="30" fill="#8794a0"/>` +
  `<g transform="translate(290,170)"><rect x="0" y="120" width="200" height="22" rx="4" fill="#c68b4a"/>` + [[6, 54, 88, 66], [100, 54, 92, 66], [24, -8, 70, 60], [104, -4, 80, 56]].map(([x, y, w, h]) => `<rect x="${x}" y="${y + 0}" width="${w}" height="${h}" rx="4" fill="#d9a064" stroke="#7a5120" stroke-width="4"/>`).join('') + `</g>` +
  `<g transform="translate(260,320)"><rect width="260" height="18" rx="6" fill="#d32f2f"/><circle cx="20" cy="26" r="14" fill="#333"/><circle cx="240" cy="26" r="14" fill="#333"/></g>` + P(540, 342, .95, { shirt: '#f28c28', extra: '<rect x="-16" y="-130" width="32" height="14" rx="7" fill="#ffd23f"/>' }) +
  check(560, 90) + tag(24, 336, 'CHECK • STABLE • CLEAR PATH', '#0b5cad');

S.corridor = () => `<rect width="640" height="400" fill="#f3e9da"/><path d="M0 0 L240 110 V290 L0 400z" fill="#e1d2b8"/><path d="M640 0 L400 110 V290 L640 400z" fill="#e1d2b8"/><rect x="240" y="110" width="160" height="180" fill="#fff6e6"/><path d="M0 400 L240 290 H400 L640 400z" fill="#8b2e3c"/><path d="M270 290 L120 400 M370 290 L520 400" stroke="#c9a34a" stroke-width="8"/>` +
  [[40, 140, 80], [520, 140, 80]].map(([x]) => `<rect x="${x}" y="130" width="50" height="190" fill="#7a4e2b" transform="skewY(${x < 300 ? 14 : -14})"/>`).join('') +
  `<ellipse cx="320" cy="350" rx="90" ry="22" fill="#6fd0e6" opacity=".75"/><g transform="translate(250,196) scale(.8)"><path d="M0 200 L70 0 L140 200z" fill="#ffc400" stroke="#1a1a1a" stroke-width="8" stroke-linejoin="round"/><text x="70" y="160" text-anchor="middle" font-family="Liberation Sans,Arial" font-weight="900" font-size="30" fill="#1a1a1a">WET</text></g>` +
  P(530, 380, .7, { shirt: '#0b5cad' }) + warnTri(80, 70, .8) + tag(24, 336, 'CLEAN • SIGN • REPORT', '#e8505b');

module.exports = S;
