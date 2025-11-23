# Tic-Tac-Toe

Jeu de Tic-Tac-Toe développé avec Vue 3, TypeScript, Pinia et Tailwind CSS.

## Installation et Lancement

### Prérequis
- Node.js (version 18+)
- npm ou yarn

### Installation
```bash
npm install
```

### Lancement en développement
```bash
npm run dev
```


## Architecture du Projet

```
src/
├── components/          # Composants Vue
│   ├── GameGrid.vue     # Grille de jeu
│   ├── GridCell.vue     # Cellule individuelle
│   ├── WinnerDisplay.vue # Affichage du résultat
│   └── RestartButton.vue # Bouton recommencer
├── views/               # Vues principales
│   ├── PieceSelectionView.vue # Écran de sélection du pion
│   └── GameView.vue     # Écran de jeu principal
├── stores/              # Gestion d'état (Pinia)
│   └── gameState.ts     # Store du jeu
├── utils/               # Logique métier pure
│   ├── boardOperations.ts  # Opérations sur le plateau
│   ├── winDetection.ts     # Détection de victoire
│   └── computerMove.ts     # Logique de l'IA
├── types/               # Définitions TypeScript
│   └── game.ts          # Types du jeu
├── config/              # Configuration centralisée
│   └── gameConfig.ts    # Paramètres du jeu
└── App.vue              # Composant racine
```

## Technologies 

- **Vue 3** - Framework progressif avec Composition API
- **TypeScript** - Typage statique pour la robustesse du code
- **Pinia** - Gestion d'état moderne pour Vue
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Build tool ultra-rapide

## Fonctionnalités

- Choix du pion (X ou O)
- IA avec placement aléatoire
- Détection de victoire/match nul

