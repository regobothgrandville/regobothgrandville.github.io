const missions = [
  {
    index: '01',
    title: 'Prototypage logiciel',
    text: 'Conception de premiers prototypes de suivi sportif à partir de données simulées pour valider les concepts et préparer leur intégration au projet.',
  },
  {
    index: '02',
    title: 'Cybersécurité',
    text: 'Analyse des risques liés aux échanges et au traitement de données sensibles, conception d’une architecture de sécurité en profondeur, préparation de solutions et documentation de leur intégration.',
  },
  {
    index: '03',
    title: 'Messagerie professionnelle',
    text: 'Étude comparative d’une évolution de la messagerie selon des critères techniques, financiers et organisationnels, avec analyse des risques et préparation d’une stratégie de migration.',
  },
  {
    index: '04',
    title: 'Développement mobile',
    text: 'Participation au développement collaboratif d’une application mobile avec React Native, TypeScript et Expo, de la mise en place du socle à plusieurs fonctionnalités et tests sur Android.',
  },
]

const securityLayers = [
  ['01', 'Flux entrants', 'Nginx · Flask · authentification HMAC-SHA-256 · timestamp · nonce · anti-rejeu · validation stricte'],
  ['02', 'Protection des données', 'Réflexion sur le chiffrement au repos, les permissions restrictives, la pseudonymisation et le principe du moindre privilège.'],
  ['03', 'Flux sortants', 'Étude d’échanges authentifiés, d’idempotence, de reprise sur erreur et de transport sécurisé vers un service autorisé.'],
  ['04', 'Maintien en sécurité', 'Durcissement Linux, pare-feu, Fail2Ban, sauvegardes, supervision, suivi des vulnérabilités et préparation de la réponse aux incidents.'],
  ['05', 'Évolution cryptographique', 'Étude en laboratoire de la cryptographie post-quantique, notamment ML-KEM et ML-DSA.'],
]

const mobileWork = [
  'Mise en place du socle général de l’application avec Expo.',
  'Travail sur l’authentification, l’interface de discussion, le profil utilisateur et un jeu Puissance 4.',
  'Participation aux fonctions de connexion avec une montre et à l’amélioration du visualiseur vocal.',
  'Tests et ajustements directement sur appareil Android, notamment pour obtenir un comportement vocal plus naturel.',
  'Utilisation collaborative de Git et GitHub : branches, fusions, analyse et résolution de conflits.',
]

const methodItems = [
  ['01', 'Prototypage', 'Développement de premiers concepts à partir de données simulées pour valider le fonctionnement attendu et préparer leur adaptation au projet principal.'],
  ['02', 'Environnement serveur', 'Les droits disponibles ont orienté le travail vers l’analyse, la conception, les tests accessibles et la rédaction d’une documentation d’intégration exploitable par l’équipe.'],
  ['03', 'Travail collaboratif', 'La gestion de branches concurrentes et de conflits Git a nécessité d’identifier l’intention des modifications avant fusion puis de contrôler l’absence de régression.'],
  ['04', 'Validation sur appareil', 'Le visualiseur vocal a été amélioré par cycles successifs : observer, modifier, tester sur téléphone, comparer puis ajuster.'],
]

export function InternshipCaseStudy() {
  return (
    <div className="case-study internship-case">
      <a className="skip-link" href="#internship-content">Aller au contenu principal</a>
      <header className="case-header">
        <a className="brand" href="/" aria-label="Retour à l’accueil">RG<span>.</span></a>
        <a className="case-back" href="/#experience">← RETOUR À L’EXPÉRIENCE</a>
      </header>

      <main id="internship-content">
        <section className="case-hero">
          <p className="case-index">EXP_01 // EXPÉRIENCE PROFESSIONNELLE</p>
          <h1>Stage Développeur <em>& Sécurité</em></h1>
          <p className="case-subtitle">Huit semaines au sein d’IA Company autour du développement logiciel, de la cybersécurité, d’une étude de migration de messagerie et du développement mobile.</p>
          <div className="case-meta">
            <div><span>ENTREPRISE</span><strong>IA COMPANY</strong></div>
            <div><span>PÉRIODE</span><strong>24 JUIN — 19 AOÛT 2026</strong></div>
            <div><span>FORMATION</span><strong>BUT R&T · CYBERSÉCURITÉ</strong></div>
            <div><span>DOMAINES</span><strong>DÉVELOPPEMENT · SÉCURITÉ · MOBILE</strong></div>
          </div>
          <p className="case-note">Les éléments présentés distinguent les travaux de conception, les prototypes testés et les fonctions intégrées, tout en préservant les informations internes de l’entreprise.</p>
        </section>

        <section className="case-section">
          <div className="case-section__label"><span>01 //</span><h2>CONTEXTE</h2></div>
          <div><p className="case-lead">Faire évoluer une solution informatique en conciliant nouvelles fonctionnalités, sécurisation des échanges et adaptation à de nouveaux usages.</p><div className="internship-facts"><article><span>FORMAT</span><strong>8 SEMAINES</strong><p>Première expérience professionnelle longue intégrée à la deuxième année de BUT.</p></article><article><span>ORGANISATION</span><strong>MISSIONS ÉVOLUTIVES</strong><p>Les travaux se sont succédé et parfois chevauchés selon les besoins du projet.</p></article><article><span>COLLABORATION</span><strong>ÉQUIPE TECHNIQUE</strong><p>Contribution à un projet existant avec coordination, Git/GitHub et développement partagé.</p></article></div></div>
        </section>

        <section className="case-section">
          <div className="case-section__label"><span>02 //</span><h2>MISSIONS</h2></div>
          <div className="evidence-panel"><div className="evidence-panel__head"><span>MISSION_MAP</span><span>04 AXES</span></div><div className="evidence-grid">{missions.map((mission) => <article className="evidence-card" key={mission.index}><span className="evidence-card__index">{mission.index}</span><div><h3>{mission.title}</h3><p>{mission.text}</p></div></article>)}</div></div>
        </section>

        <section className="case-section">
          <div className="case-section__label"><span>03 //</span><h2>SÉCURISATION</h2></div>
          <div><p className="case-lead">Concevoir une démarche de défense en profondeur autour du cycle de vie des données et des échanges entre composants.</p><div className="security-flow" aria-label="Couches de sécurisation étudiées">{securityLayers.map(([index, title, text]) => <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><p className="case-note">Travail centré sur l’analyse des risques, la conception de l’architecture, la préparation et le test de solutions accessibles dans mon environnement, ainsi que la rédaction d’une documentation d’intégration pour l’équipe.</p></div>
        </section>

        <section className="case-section">
          <div className="case-section__label"><span>04 //</span><h2>MESSAGERIE</h2></div>
          <div><p className="case-lead">Étudier et préparer une évolution de la messagerie professionnelle.</p><div className="case-list"><p>Cadrage du besoin, de l’existant, des contraintes et des exigences.</p><p>Comparaison d’approches et de solutions selon une grille multicritère.</p><p>Prise en compte de critères techniques, financiers, organisationnels, de sécurité et de protection des données.</p><p>Analyse des risques et préparation des actions nécessaires à une transition.</p><p>Production d’une recommandation argumentée et d’un scénario de migration préparatoire.</p></div></div>
        </section>

        <section className="case-section">
          <div className="case-section__label"><span>05 //</span><h2>MOBILE & COLLABORATION</h2></div>
          <div><p className="case-lead">Découvrir le développement mobile tout en contribuant à une base applicative partagée par plusieurs développeurs.</p><div className="case-list">{mobileWork.map((item) => <p key={item}>{item}</p>)}</div><div className="internship-stack"><span>REACT NATIVE</span><span>TYPESCRIPT</span><span>EXPO</span><span>ANDROID</span><span>GIT</span><span>GITHUB</span></div></div>
        </section>

        <section className="case-section">
          <div className="case-section__label"><span>06 //</span><h2>MÉTHODE & CONTRAINTES</h2></div>
          <div className="evidence-panel"><div className="evidence-panel__head"><span>MÉTHODE DE TRAVAIL</span><span>04 REPÈRES</span></div><div className="evidence-grid">{methodItems.map(([index, title, text]) => <article className="evidence-card" key={index}><span className="evidence-card__index">{index}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
        </section>

        <section className="case-section">
          <div className="case-section__label"><span>07 //</span><h2>APPORTS</h2></div>
          <div><p className="case-lead">Une expérience qui a relié réseaux, systèmes, cybersécurité et développement dans un même contexte professionnel.</p><div className="case-list"><p>Approfondissement de l’analyse des risques, de la défense en profondeur, de l’authentification des échanges, de l’anti-rejeu et de la protection des données.</p><p>Mise en pratique de Python, Linux, réseaux, bases de données, Git et sécurité des communications.</p><p>Découverte de React Native, TypeScript, Expo et des contraintes propres au développement mobile.</p><p>Première approche de la cryptographie post-quantique et de ses précautions d’intégration.</p><p>Progression en autonomie, communication technique, coordination et adaptation face à des contraintes réelles.</p></div></div>
        </section>

        <section className="case-footer-panel"><div><p className="case-footer-panel__label">EXP_01 // FIN DU DOSSIER</p><h2>Voir mes autres <em>réalisations techniques.</em></h2></div><a className="button button--primary" href="/#projets">EXPLORER LES PROJETS →</a></section>
      </main>
      <footer className="case-site-footer"><a className="brand" href="/" aria-label="Retour à l’accueil">RG<span>.</span></a><span>IA COMPANY · JUIN — AOÛT 2026</span><span>PORTFOLIO // EXPÉRIENCE</span></footer>
    </div>
  )
}
