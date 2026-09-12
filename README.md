# Regoboth Grandville — Portfolio

Portfolio personnel de **Regoboth Grandville**, étudiant en BUT Réseaux & Télécommunications, parcours Cybersécurité.

> Réseaux · Systèmes · Cybersécurité · Automatisation

## Statut

Le portfolio est publié sur GitHub Pages : **https://regobothgrandville.github.io/**.

La branche `master` correspond à la version de production. Les évolutions sont préparées dans des branches dédiées, validées par la CI puis intégrées après vérification.

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
  workflows/       Validation continue et déploiement GitHub Pages
public/             Ressources statiques, CV, SEO et fallback GitHub Pages
src/
  components/       Composants réutilisables
  data/             Contenu structuré du portfolio
  pages/            Études de cas et page 404 applicative
  styles/           Styles globaux, études de cas et responsive
```

## Développement local

Le dépôt contient un `package-lock.json` et utilise des versions épinglées. Pour reproduire l'environnement validé par la CI :

```bash
npm ci
npm run dev
```

Vérifications avant intégration :

```bash
npm run lint
npm run build
```

La CI GitHub Actions exécute `npm ci`, le lint, le build et vérifie également que le PDF du CV produit dans `dist/` correspond exactement au fichier attendu. Le workflow GitHub Pages construit ensuite la version de production et la déploie depuis `master`.

## Routes principales

```text
/
/projects/infrastructure-securisee
/projects/pentest-controle
/projects/application-collaborative
/projects/gestionnaire-reseau
```

Les routes inconnues sont renvoyées par le fallback GitHub Pages vers l'application, qui affiche ensuite une page 404 dédiée.

## Branches

- `master` : version stable publiée ;
- `develop` : branche d'intégration disponible lorsque nécessaire ;
- branches `feature/*`, `fix/*`, `chore/*` ou `docs/*` : évolutions isolées avant intégration.

## Confidentialité

Le contenu public du portfolio est volontairement limité aux informations pouvant être diffusées. Les éléments confidentiels issus d'expériences professionnelles ou de projets privés ne doivent pas être ajoutés au dépôt.

## Auteur

**Regoboth Grandville**  
Réseaux · Systèmes · Cybersécurité
