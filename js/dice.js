// Symboles des dés (faces « bloc », « viseur », « bouclier »).
// La face « bloc » porte l'emblème du bloc de l'unité ; viseur et bouclier sont uniques.
// Tous les dessins sont en une seule couleur (currentColor), viewBox 0 0 100 100.
const PATHS = {
 "fallback": "<circle cx=\"50\" cy=\"50\" r=\"43.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"6.0\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M56.2 75.5 55.7 76.2 55.7 77.2 56.4 78.0 56.9 78.0 57.5 77.4 57.6 76.2 57.1 75.5Z M47.4 75.5 47.0 75.9 46.9 77.1 47.5 78.1 48.1 78.1 48.7 77.2 48.7 76.1 48.3 75.5Z M43.0 75.5 42.5 76.1 42.6 77.4 43.1 78.0 44.0 78.0 44.6 77.1 44.4 75.7Z M52.5 75.4 51.8 75.4 51.3 75.9 51.4 77.7 52.1 78.1 52.7 77.7 53.1 76.6 53.1 75.9Z M47.7 70.0 47.0 70.5 46.9 72.0 47.3 72.6 48.2 72.6 48.7 71.9 48.7 70.5 48.3 70.0Z M57.1 69.8 56.2 70.0 55.7 70.9 55.8 72.3 56.5 72.7 57.3 72.6 57.6 71.8 57.6 70.4Z M44.0 70.0 43.0 70.0 42.5 70.7 42.4 72.2 42.7 72.7 43.8 72.7 44.6 71.9 44.6 70.7Z M52.1 69.7 51.3 70.6 51.2 71.6 51.6 72.4 52.3 72.7 53.0 72.4 53.2 71.5 53.0 70.2 52.7 69.8Z M64.6 64.4 64.3 64.1 62.2 64.4 61.4 64.8 60.5 65.9 60.1 68.8 60.2 77.1 59.7 78.9 58.0 80.3 55.1 80.2 53.1 80.6 51.6 80.6 50.6 80.2 49.5 80.2 47.9 80.6 45.9 79.9 44.6 80.1 41.8 79.8 40.8 79.3 40.1 78.5 39.9 77.6 39.9 68.0 39.5 66.6 38.2 65.2 35.9 64.9 35.5 65.2 35.2 66.9 35.4 72.9 35.7 74.9 36.6 77.2 38.3 79.9 41.3 82.9 44.7 84.6 49.7 85.4 53.8 85.0 56.7 84.1 58.4 83.2 60.4 81.5 62.7 78.5 63.9 75.9 64.4 74.2 64.8 70.7Z M42.0 21.7 39.5 22.5 34.7 24.6 32.6 25.9 28.6 29.1 26.9 30.8 25.0 33.1 22.3 37.7 21.0 41.3 20.3 46.0 20.3 48.4 20.7 51.3 21.4 53.1 23.0 56.1 25.6 58.4 29.1 60.4 33.1 61.4 35.4 61.4 39.4 62.2 40.4 62.8 41.3 63.9 42.2 66.5 45.3 67.1 46.2 67.1 47.1 66.7 51.0 67.0 52.2 66.7 54.7 66.9 56.7 66.5 57.6 65.7 57.8 65.0 59.1 62.8 60.5 61.8 68.9 60.8 71.3 60.0 74.1 58.3 76.6 55.8 78.4 52.7 79.4 48.8 79.3 45.5 78.1 39.9 76.2 35.6 74.2 32.8 69.4 27.7 66.7 25.8 63.6 23.9 56.0 21.2 51.7 20.7 47.7 20.7Z M49.2 53.4 49.9 53.4 51.0 53.9 52.6 55.4 53.4 57.3 53.1 58.6 51.6 60.1 49.9 60.5 47.4 60.1 46.1 58.9 45.7 58.0 45.9 57.1 46.9 55.4Z M61.0 40.7 63.9 39.9 67.4 40.0 70.1 41.3 72.0 43.3 73.2 46.0 73.3 48.4 72.3 51.4 70.4 53.6 67.2 55.1 65.3 55.3 62.8 55.2 61.3 54.8 59.9 54.0 57.1 51.4 56.1 48.8 56.1 46.8 56.5 45.3 57.3 43.9 59.2 41.8Z M32.9 40.0 35.2 39.9 36.9 40.1 39.4 41.2 40.5 42.0 42.1 43.8 43.3 46.2 43.5 48.8 43.0 50.8 42.0 52.3 40.4 53.8 37.3 55.2 32.8 55.2 30.6 54.3 29.5 53.6 27.7 51.7 26.4 49.1 26.5 46.0 27.4 43.8 28.1 42.9 29.9 41.3Z\"/>",
 "sight": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\" stroke-linecap=\"round\"><circle cx=\"50\" cy=\"50\" r=\"33\"/><path d=\"M50 8V32M50 68V92M8 50H32M68 50H92\"/></g><circle cx=\"50\" cy=\"50\" r=\"5\" fill=\"currentColor\"/>",
 "shield": "<path d=\"M17 10Q50 3 83 10V47C83 69 67 84 50 95C33 84 17 69 17 47Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"9\" stroke-linejoin=\"round\"/>"
};

// Emblèmes de blocs : ajouter ici « idDuBloc » dans PATHS (dessin sur une couleur, viewBox 100×100) pour remplacer le symbole de repli.
const BLOC_KEYS = new Set(Object.keys(PATHS).filter((k) => !['fallback', 'sight', 'shield'].includes(k)));
const TITLES = { dice_block: 'Face « bloc »', dice_sight: 'Face « viseur »', dice_shield: 'Face « bouclier »' };

// code : 'dice_block' | 'dice_sight' | 'dice_shield' (ou 'block' | 'sight' | 'shield')
// bloc : id du bloc de l'unité (sinon symbole de repli pour la face « bloc »)
export function diceKey(code, bloc) {
  const c = String(code).replace(/^dice_/, '');
  if (c === 'sight') return 'sight';
  if (c === 'shield') return 'shield';
  return BLOC_KEYS.has(bloc) ? bloc : 'fallback';
}
export const diceInner = (code, bloc) => PATHS[diceKey(code, bloc)];
export const diceTitle = (code) => TITLES[String(code).startsWith('dice_') ? code : 'dice_' + code];
export const diceSvg = (code, bloc) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true">${diceInner(code, bloc)}</svg>`;

// Symboles des cases d'attaque (cartes) : B = explosion, BB / DB = double explosion, AK = mort instantanée.
// BB et DB désignent la même chose (double blast) : on les affiche pareil, sans toucher à la base.
export const ATTACK_ICONS = {
  blast: { w: 100, h: 100, inner: '<path fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round" d="M56.7 7.5 60.1 31.9 76.5 25.1 73.2 40.0 94.4 44.6 72.2 55.4 83.8 68.9 68.6 70.3 70.7 91.9 53.7 74.2 44.4 89.4 38.3 75.3 18.4 84.0 30.0 62.4 12.7 58.2 24.2 48.1 9.8 31.9 34.0 36.2 32.6 18.4 45.7 26.3Z"/>' },
  double: { w: 112, h: 100, inner: '<defs><mask id="dbmB" maskUnits="userSpaceOnUse" x="-10" y="-10" width="140" height="120"><rect x="-10" y="-10" width="140" height="120" fill="#fff"/><path d="M46.0 18.4 49.0 40.1 63.6 34.1 60.6 47.3 79.5 51.5 59.8 61.0 70.0 73.0 56.5 74.3 58.4 93.5 43.3 77.7 35.0 91.2 29.6 78.7 11.9 86.5 22.2 67.2 6.9 63.5 17.1 54.5 4.2 40.1 25.8 44.0 24.5 28.2 36.2 35.1Z" fill="#000" stroke="#000" stroke-width="9" stroke-linejoin="round"/></mask></defs><g fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M92.9 9.9 87.2 31.0 103.0 31.1 95.1 42.2 110.9 53.3 89.1 54.5 93.8 69.6 80.9 65.4 75.1 83.9 67.3 63.4 54.4 72.6 54.4 59.1 35.0 59.3 52.1 45.6 39.3 36.1 52.2 31.9 46.0 13.6 64.4 25.5 69.4 10.5 77.4 21.4Z" mask="url(#dbmB)"/><path d="M46.0 18.4 49.0 40.1 63.6 34.1 60.6 47.3 79.5 51.5 59.8 61.0 70.0 73.0 56.5 74.3 58.4 93.5 43.3 77.7 35.0 91.2 29.6 78.7 11.9 86.5 22.2 67.2 6.9 63.5 17.1 54.5 4.2 40.1 25.8 44.0 24.5 28.2 36.2 35.1Z"/></g>' },
  kill: { w: 100, h: 100, inner: '<g fill="currentColor"><path fill-rule="evenodd" d="M50 6C29 6 17 20 17 37C17 47 21 54 28 59L28 69C28 72 30 74 33 74L67 74C70 74 72 72 72 69L72 59C79 54 83 47 83 37C83 20 71 6 50 6ZM37 31A8.5 8.5 0 1 0 37 48A8.5 8.5 0 1 0 37 31ZM63 31A8.5 8.5 0 1 0 63 48A8.5 8.5 0 1 0 63 31ZM50 48L44 60L56 60Z"/></g><g fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"><path d="M17 70L83 92M83 70L17 92"/></g><g fill="currentColor"><circle cx="14" cy="68" r="7"/><circle cx="86" cy="68" r="7"/><circle cx="14" cy="94" r="7"/><circle cx="86" cy="94" r="7"/></g>' },
};
// Découpe « B/1 », « DB/1 », « 1/AK »… ; renvoie null si la case n'a rien de spécial
export function attackParts(v) {
  const m = String(v ?? '').trim().match(/^([^/]+)\/([^/]+)$/);
  if (!m) return null;
  const kind = (x) => (x === 'B' ? 'blast' : x === 'BB' || x === 'DB' ? 'double' : x === 'AK' ? 'kill' : null);
  const a = kind(m[1].toUpperCase()), b = kind(m[2].toUpperCase());
  // un symbole n'est accepté que du bon côté (gabarit à gauche, mort instantanée à droite)
  const left = a === 'blast' || a === 'double' ? a : null, right = b === 'kill' ? b : null;
  if (!left && !right) return null;
  return { left: left ? { icon: left } : { text: m[1] }, right: right ? { icon: right } : { text: m[2] } };
}
// Case d'attaque en HTML (fiches d'unité, fiches de partie) : symboles à la place des lettres B / BB / DB / AK
let atkN = 0;
const escH = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export function attackHtml(v) {
  const sp = attackParts(v);
  if (!sp) return escH(v ?? '');
  const part = (p) => {
    if (!p.icon) return escH(p.text);
    const ic = ATTACK_ICONS[p.icon];
    const inner = ic.inner.replace(/dbmB/g, 'dbmB' + (++atkN));
    return `<svg class="atk-i" viewBox="0 0 ${ic.w} ${ic.h}" style="width:${(ic.w / 100 * 1.35).toFixed(2)}em" aria-hidden="true">${inner}</svg>`;
  };
  return `<span class="atk" title="${escH(v)}">${part(sp.left)}/${part(sp.right)}</span>`;
}
