# TACTICS: M.A.S.K. — modèle vierge d'army builder de fan

Modèle figé pour créer un army builder (listes d'armée avec budget de points) pour un jeu de figurines. **Ne pas modifier ce modèle** : on en fait une copie pour chaque nouveau jeu.

Contenu : builder complet, atelier de créations de la communauté (CONFIDENTIAL), éditeur de base avec publication sur GitHub, cartes générées, export PDF/PNG, français/anglais, site installable sur téléphone, collection personnelle, aide.

Les données (`data/`) sont **fictives** : 4 unités, 3 blocs, 1 peloton, 4 compétences. Elles servent à tester.

## Créer un nouveau jeu à partir du modèle

1. Copier tout le dossier du modèle dans un nouveau dossier (et, plus tard, dans un nouveau dépôt GitHub).
2. Dans ce nouveau dossier, lancer une seule fois : `node scripts/new-game.mjs "Nom du jeu" identifiantcourt`. Cela remplace « TACTICS: M.A.S.K. » par « TACTICS: M.A.S.K. Nom du jeu » et « mask » par l'identifiant dans tous les fichiers (titres, clés de stockage du navigateur, nom du site installable).
3. Remplacer les données de `data/` : `units.json`, `blocs.json`, `skills.json`, `skills.fr.json`.
4. Remplacer `img/bandeau.png` (bannière des cartes) et les icônes `img/icon-*.png`, `img/apple-touch-icon.png`. Ne pas reprendre d'illustrations ni de logos officiels.
5. Lancer `node scripts/validate.mjs` (vérification de la base) puis `node scripts/bump-version.mjs` (anti-cache). Voir un site en local : `python3 -m http.server 8000`.
6. Mettre en ligne sur GitHub Pages (dépôt public, Settings → Pages → branche `main` / racine).

## Ce qui est propre au jeu d'origine et à adapter

- `js/rules.js` : règles de construction (limite de points, bonus héros de 10 %, part de faction de 75 %, mercenaires, véhicule capturé, pilotes, commissaires, pelotons). Ce sont celles du jeu d'origine : à adapter ou simplifier selon le nouveau jeu.
- `js/dice.js` et `js/data.js` : symboles d'attaque et types d'unités (infanterie, véhicule, héros, aéronef, objet).
- `data/short-format.json` : réglage du bouton « Donner mon avis » (lien Discord, textes). Le lien y est un exemple.
- `js/atelier.js` : salon Discord d'envoi des créations (constantes `DISCORD` et `CHANNEL`).
- Textes d'aide (`js/aide.js`) et traductions (`js/i18n.js`).

## Éditeur de base

L'éditeur de base (page `editeur-2k26hdl.html`, adresse à garder privée et à renommer pour chaque jeu) publie sur GitHub avec un jeton personnel qui reste dans le navigateur. **Règle importante :** fermer l'éditeur avant de déposer à la main des fichiers dans `data/` : il republie sa copie en mémoire et écraserait le dépôt.

Outil de fan non officiel et gratuit. Aucune donnée, image ou marque officielle n'est incluse dans ce modèle.
