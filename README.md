# Regoboth Grandville — Portfolio

Portfolio personnel de **Regoboth Grandville**, étudiant en BUT Réseaux & Télécommunications, parcours Cybersécurité.

> Réseaux · Systèmes · Cybersécurité · Automatisation

## Statut

Le portfolio est actuellement en développement. La branche `master` reste la référence stable ; les évolutions sont préparées sur `develop` avant intégration.

## Direction du projet

Le site suit le concept visuel **Network Observatory** : une interface inspirée des infrastructures, de l'observabilité et des topologies réseau, sans reprendre les clichés visuels habituels de la cybersécurité.

L'expérience est pensée pour deux niveaux de lecture :

- une lecture rapide permettant d'identifier le profil, les compétences et les projets principaux ;
- une lecture technique donnant accès aux architectures, décisions, difficultés, solutions et rétrospectives des études de cas.

## Stack

- React
- TypeScript
- Vite
- CSS
- ESLint
- GitHub Actions
- GitHub Pages

## Architecture

```text
.github/
  workflows/       Automatisation CI et déploiement
public/             Ressources statiques publiques
src/
  assets/           Ressources utilisées par l'application
  components/       Composants réutilisables
  data/             Contenu structuré du portfolio
  pages/            Pages et études de cas
  styles/           Fondations et styles globaux
```

## Développement local

```bash
npm install
npm run dev
```

Vérifications avant intégration :

```bash
npm run lint
npm run build
```

## Branches

- `master` : version stable destinée à la publication ;
- `develop` : intégration des évolutions en cours ;
- branches `feature/*` : à utiliser pour les évolutions isolées lorsque nécessaire.

## Confidentialité

Le contenu public du portfolio est volontairement limité aux informations pouvant être diffusées. Les éléments confidentiels issus d'expériences professionnelles ou de projets privés ne doivent pas être ajoutés au dépôt.

## Auteur

**Regoboth Grandville**  
Réseaux · Systèmes · Cybersécurité
