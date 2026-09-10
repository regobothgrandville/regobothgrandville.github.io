export interface ProjectDetail {
  slug: string
  index: string
  title: string
  subtitle: string
  year: string
  context: string
  team: string
  role: string
  note?: string
  problem: string
  architecture: readonly string[]
  contribution: readonly string[]
  choices: readonly { title: string; text: string }[]
  difficulties: readonly { problem: string; solution: string }[]
  results: readonly string[]
  improvements: readonly string[]
  technologies: readonly string[]
  github?: string
}

export const projectDetails: readonly ProjectDetail[] = [
  {
    slug: 'infrastructure-securisee', index: 'PRJ_01', title: 'Infrastructure sécurisée & haute disponibilité',
    subtitle: 'Concevoir une architecture virtualisée, segmentée et résiliente à partir d’un besoin client simulé.', year: '2026',
    context: 'SAÉ 3.Cyber.03 · Projet universitaire', team: 'Équipe de 3', role: 'Conception · Analyse · Documentation',
    note: 'Cas d’étude universitaire. Le scénario client est pédagogique et ne doit pas être interprété comme une prestation réellement déployée auprès de l’organisation citée dans le sujet.',
    problem: 'Le projet demandait de proposer une infrastructure virtualisée capable de répondre à des exigences de disponibilité, de sécurité, de continuité de service et de maîtrise des risques, tout en restant justifiable techniquement et économiquement.',
    architecture: ['Internet → Pare-feu', 'Pare-feu → DMZ / services exposés', 'Pare-feu → cœur de réseau', 'Cœur → VLAN utilisateurs / administration / serveurs', 'Infrastructure → virtualisation, sauvegarde et services'],
    contribution: ['Analyse du besoin et des enjeux de disponibilité et de sécurité.', 'Participation à la conception de l’architecture logique et à la segmentation.', 'Justification des choix techniques et prise en compte des risques.', 'Participation à la stratégie de migration et à la documentation de la prestation.'],
    choices: [
      { title: 'Segmentation', text: 'Séparer les usages et services par VLAN afin de réduire les mouvements latéraux et de clarifier les politiques de filtrage.' },
      { title: 'Virtualisation', text: 'Consolider les services tout en conservant une séparation logique, une meilleure maintenabilité et des possibilités de reprise.' },
      { title: 'Disponibilité', text: 'Prévoir la redondance, la sauvegarde et les scénarios de continuité dès la conception plutôt que comme correctifs ultérieurs.' },
      { title: 'DICP', text: 'Utiliser disponibilité, intégrité, confidentialité et preuve comme grille de lecture commune pour relier besoin métier et architecture.' }
    ],
    difficulties: [
      { problem: 'Transformer des exigences métier générales en contraintes techniques mesurables.', solution: 'Structurer le besoin par fonctions, criticité et impacts, puis rattacher chaque mesure à un risque ou une exigence.' },
      { problem: 'Éviter une architecture complexe sans justification.', solution: 'Documenter chaque brique avec son objectif, son bénéfice et les limites qu’elle introduit.' }
    ],
    results: ['Architecture cible structurée et segmentée.', 'Plan de migration et gestion des risques intégrés à la proposition.', 'Prise en compte du budget, des sauvegardes, de la disponibilité et de la sécurité dans un même dossier.'],
    improvements: ['Créer un prototype reproductible de l’architecture.', 'Automatiser davantage le déploiement et la configuration.', 'Mesurer les temps de bascule et tester formellement les scénarios de panne.', 'Ajouter des preuves de supervision et des indicateurs de disponibilité.'],
    technologies: ['Virtualisation', 'VLAN', 'Pare-feu', 'Haute disponibilité', 'Sauvegarde', 'DICP']
  },
  {
    slug: 'pentest-controle', index: 'PRJ_02', title: 'Laboratoire de test d’intrusion contrôlé',
    subtitle: 'Conduire un audit offensif dans un environnement isolé, de la découverte à la remédiation.', year: '2026',
    context: 'SAÉ 3.Cyber.04 · Projet universitaire', team: 'Équipe de 2', role: 'Audit · Analyse · Remédiation',
    problem: 'L’objectif était de comprendre concrètement une démarche de test d’intrusion sans sortir d’un cadre maîtrisé : identifier les services exposés, analyser des vulnérabilités connues, démontrer leur impact puis proposer des mesures correctives.',
    architecture: ['Kali Linux → réseau VirtualBox Host-Only', 'Host-Only → cible Windows XP SP1', 'Host-Only → cible Metasploitable 2', 'Aucun accès nécessaire à un système tiers réel'],
    contribution: ['Préparation du laboratoire isolé.', 'Reconnaissance et identification des services accessibles.', 'Analyse et exploitation contrôlée de vulnérabilités sur les machines prévues pour l’exercice.', 'Évaluation du risque et formulation de recommandations de remédiation.'],
    choices: [
      { title: 'Isolation', text: 'Utiliser un réseau Host-Only pour maintenir l’expérimentation dans le périmètre pédagogique prévu.' },
      { title: 'Méthodologie', text: 'Conserver une chaîne lisible : reconnaissance → analyse → exploitation contrôlée → évaluation du risque → remédiation.' },
      { title: 'Preuve', text: 'Associer les résultats techniques à leur impact plutôt que de présenter uniquement une succession de commandes.' }
    ],
    difficulties: [
      { problem: 'Distinguer une vulnérabilité détectée d’un risque réellement démontré.', solution: 'Vérifier les conditions d’exploitation et documenter l’impact obtenu dans le laboratoire.' },
      { problem: 'Éviter de transformer le compte rendu en catalogue d’outils.', solution: 'Structurer l’analyse autour des étapes d’audit, du risque et des mesures correctives.' }
    ],
    results: ['Cartographie des services accessibles.', 'Démonstration contrôlée de vulnérabilités sur des cibles volontairement vulnérables.', 'Recommandations de correction et analyse du risque résiduel.'],
    improvements: ['Formaliser davantage la priorisation des vulnérabilités.', 'Automatiser la collecte de preuves reproductibles.', 'Ajouter une phase de vérification après remédiation.', 'Séparer encore mieux les preuves techniques et la synthèse destinée à un décideur.'],
    technologies: ['Kali Linux', 'Nmap', 'Metasploit', 'VirtualBox', 'Analyse de vulnérabilités', 'Remédiation']
  },
  {
    slug: 'application-collaborative', index: 'PRJ_03', title: 'Application réseau collaborative',
    subtitle: 'Développer une application client/serveur avec persistance, authentification et échanges réseau.', year: '2026',
    context: 'SAÉ 3.02 · Projet universitaire', team: 'Projet en équipe', role: 'Client/serveur · Python · SQL',
    problem: 'Le projet consistait à réaliser une application collaborative communicante en Python, avec gestion de données persistantes, rôles utilisateurs et échanges entre plusieurs composants.',
    architecture: ['Clients → échanges réseau TCP/UDP', 'Clients → serveur applicatif Python', 'Serveur → base de données SQL', 'Serveur → authentification, rôles, historique et logique collaborative'],
    contribution: ['Développement Python autour du modèle client/serveur.', 'Travail sur la persistance et les interactions avec la base de données.', 'Intégration de fonctions d’authentification, de rôles et de traçabilité.', 'Utilisation de Git/GitHub pour le suivi du projet.'],
    choices: [
      { title: 'Client / serveur', text: 'Centraliser la logique métier et les données tout en permettant plusieurs clients communicants.' },
      { title: 'Persistance SQL', text: 'Conserver les informations nécessaires au fonctionnement collaboratif et à l’historique.' },
      { title: 'Rôles', text: 'Différencier les droits et comportements selon le type d’utilisateur.' }
    ],
    difficulties: [
      { problem: 'Synchroniser logique réseau et état persistant.', solution: 'Clarifier les responsabilités entre transport, logique applicative et accès aux données.' },
      { problem: 'Gérer les entrées et erreurs venant de plusieurs clients.', solution: 'Structurer les contrôles et isoler progressivement les traitements critiques.' }
    ],
    results: ['Application collaborative fonctionnelle en environnement de projet.', 'Persistance des données et gestion des utilisateurs.', 'Architecture client/serveur suffisamment structurée pour être documentée et maintenue en équipe.'],
    improvements: ['Ajouter une couverture de tests automatisés plus large.', 'Renforcer la validation des entrées.', 'Traiter plus systématiquement les erreurs réseau et les déconnexions.', 'Séparer encore davantage protocole, logique métier et couche de données.'],
    technologies: ['Python', 'TCP / UDP', 'SQL', 'Git / GitHub', 'Authentification', 'Traçabilité'], github: 'https://github.com/regobothgrandville/SAE302'
  },
  {
    slug: 'gestionnaire-reseau', index: 'PRJ_04', title: 'Gestionnaire de ressources réseau',
    subtitle: 'Automatiser l’attribution de ressources et la génération de configurations à partir d’une application Web.', year: '2025',
    context: 'SAÉ 2.3 · Projet universitaire', team: 'Équipe de 2', role: 'Flask · PostgreSQL · Automatisation',
    problem: 'Le scénario demandait de centraliser l’attribution de ressources réseau et de générer automatiquement des éléments de configuration, tout en proposant une interface utilisable par différents profils.',
    architecture: ['Utilisateur → interface Web', 'Interface → application Flask', 'Flask → PostgreSQL', 'Moteur de génération → IP / VLAN / VRF', 'Résultat → configuration d’équipements réseau'],
    contribution: ['Développement de l’application en Python et Flask.', 'Modélisation et utilisation de la base PostgreSQL.', 'Automatisation de l’attribution de ressources réseau.', 'Génération d’éléments de configuration liés aux interfaces, VLAN et VRF.'],
    choices: [
      { title: 'Flask', text: 'Mettre rapidement à disposition une interface Web reliée à la logique d’automatisation.' },
      { title: 'PostgreSQL', text: 'Centraliser les données d’adressage et les informations nécessaires à la génération.' },
      { title: 'Génération', text: 'Réduire les opérations répétitives et les incohérences lors de la préparation des configurations.' }
    ],
    difficulties: [
      { problem: 'Garantir l’unicité et la cohérence des ressources attribuées.', solution: 'S’appuyer sur une source de données centralisée et contrôler les opérations avant génération.' },
      { problem: 'Conception initiale de l’authentification perfectible.', solution: 'Avec mon recul actuel en cybersécurité, je remplacerais toute conservation de mot de passe réutilisable par un stockage fondé sur un hachage adapté et une gestion correcte des secrets.' }
    ],
    results: ['Gestion centralisée des ressources réseau.', 'Génération automatisée de paramètres et configurations.', 'Lien concret entre développement Web, base de données et administration réseau.'],
    improvements: ['Renforcer l’authentification et la gestion des secrets.', 'Valider strictement toutes les entrées.', 'Ajouter des tests automatisés sur l’attribution d’adresses et la génération.', 'Mettre en place une journalisation plus exploitable et une séparation plus nette des responsabilités applicatives.'],
    technologies: ['Python', 'Flask', 'PostgreSQL', 'VLAN', 'VRF', 'Automatisation réseau']
  }
]
