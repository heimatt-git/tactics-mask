#!/usr/bin/env node
// Renomme le modèle pour un nouveau jeu.
//   node scripts/new-game.mjs "M.A.S.K." mask
// 1er argument : le nom du jeu, ajouté après « TACTICS: » (ex. « TACTICS: M.A.S.K. »). 2e argument : un identifiant court (lettres minuscules et chiffres, sans espace).
// À lancer UNE SEULE FOIS, sur la copie du modèle. Les données (data/) restent fictives : à remplacer ensuite.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const [name, slug] = process.argv.slice(2);
if (!name || !/^[a-z0-9]{2,20}$/.test(slug || '')) {
  console.error('Usage : node scripts/new-game.mjs "Nom du jeu" identifiantcourt');
  process.exit(1);
}
const root = new URL('../', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const EXT = /\.(html|js|mjs|css|json|md|webmanifest)$/;
let n = 0;
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    if (f === '.git' || f === 'node_modules' || f === 'new-game.mjs') continue;
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!EXT.test(f)) continue;
    const s = readFileSync(p, 'utf8');
    const o = s.replaceAll('TACTICS:', 'TACTICS: ' + name).replaceAll('tactics', slug);
    if (o !== s) { writeFileSync(p, o); n++; }
  }
};
walk(root);
console.log(`${n} fichier(s) modifié(s). Prochaines étapes : data/ (unités, blocs, compétences), img/ (bannière, icônes), puis node scripts/bump-version.mjs`);
