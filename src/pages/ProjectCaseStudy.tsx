import type { ReactNode } from 'react'
import type { ProjectDetail } from '../data/projectDetails'

interface ProjectCaseStudyProps {
  project: ProjectDetail
}

const prj01Evidence = [
  { label: '01', title: 'Analyse du besoin', text: 'Étude du besoin client et des enjeux de cybersécurité pour cadrer l’architecture cible.' },
  { label: '02', title: 'Architecture sécurisée', text: 'Conception sur dossier d’une architecture réseau sécurisée adaptée au contexte multi-sites.' },
  { label: '03', title: 'Migration & chiffrage', text: 'Définition d’une stratégie de migration, estimation budgétaire et sélection du matériel.' },
  { label: '04', title: 'Restitution', text: 'Rédaction de la prestation et présentation des choix techniques lors de la soutenance.' },
] as const

const prj03Evidence = [
  { label: '01', title: 'Interface Flask', text: 'Routes Web, sessions utilisateur et vues d’agenda sont implémentées dans app.py.' },
  { label: '02', title: 'Transport TCP / UDP', text: 'Les actions critiques utilisent un canal TCP dédié et les notifications rapides un canal UDP.' },
  { label: '03', title: 'Serveur concurrent', text: 'Le serveur central écoute les deux transports et traite les connexions TCP via des threads dédiés.' },
  { label: '04', title: 'Modèle PostgreSQL', text: 'Le schéma persiste utilisateurs, rôles, agendas, équipes, participations et événements.' },
] as const

const pentestWorkflow = ['Reconnaissance', 'Analyse', 'Exploitation contrôlée', 'Évaluation du risque', 'Remédiation'] as const

function NumberedSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="case-section">
      <div className="case-section__label"><span>{number}</span><h2>{title}</h2></div>
      <div className="case-section__content">{children}</div>
    </section>
  )
}

function PentestLabDiagram({ project }: { project: ProjectDetail }) {
  return (
    <figure className="lab-diagram" aria-labelledby={`architecture-title-${project.slug}`}>
      <figcaption className="architecture-diagram__head">
        <span id={`architecture-title-${project.slug}`}>ISOLATED LAB // {project.index}</span>
        <span>HOST-ONLY · PÉRIMÈTRE PÉDAGOGIQUE</span>
      </figcaption>
      <div className="lab-diagram__canvas">
        <div className="lab-node lab-node--operator"><small>MACHINE D’AUDIT</small><strong>Kali Linux</strong><span>Nmap · Metasploit</span></div>
        <div className="lab-link" aria-hidden="true"><i /></div>
        <div className="lab-segment">
          <div className="lab-segment__label"><span>VIRTUALBOX</span><strong>Réseau Host-Only</strong><small>ISOLÉ DES SYSTÈMES TIERS</small></div>
          <div className="lab-segment__targets">
            <div className="lab-node"><small>CIBLE 01</small><strong>Windows XP SP1</strong><span>Machine prévue pour l’exercice</span></div>
            <div className="lab-node"><small>CIBLE 02</small><strong>Metasploitable 2</strong><span>Machine volontairement vulnérable</span></div>
          </div>
        </div>
      </div>
      <div className="lab-workflow" aria-label="Méthodologie de test d'intrusion">
        {pentestWorkflow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}
      </div>
      <div className="architecture-diagram__legend"><span><i /> ENVIRONNEMENT CONTRÔLÉ</span><span>AUCUN SYSTÈME TIERS RÉEL</span></div>
    </figure>
  )
}

function CollaborativeAppDiagram({ project }: { project: ProjectDetail }) {
  return (
    <figure className="collab-diagram" aria-labelledby={`architecture-title-${project.slug}`}>
      <figcaption className="architecture-diagram__head">
        <span id={`architecture-title-${project.slug}`}>APPLICATION FLOW // {project.index}</span>
        <span>CODE-BACKED VIEW</span>
      </figcaption>
      <div className="collab-diagram__canvas">
        <div className="collab-node collab-node--client">
          <small>CLIENT</small><strong>Interface Web</strong><span>Flask · sessions · agendas</span>
        </div>
        <div className="collab-link collab-link--main" aria-hidden="true"><i /></div>
        <div className="collab-node collab-node--app">
          <small>APPLICATION</small><strong>Python / Flask</strong><span>Logique collaborative · rôles · authentification</span>
        </div>
        <div className="collab-branches" aria-hidden="true"><span /><span /></div>
        <div className="collab-services">
          <div className="collab-node collab-node--service"><small>PERSISTANCE</small><strong>PostgreSQL</strong><span>Utilisateurs · rôles · agendas · équipes · événements</span></div>
          <div className="collab-node collab-node--service"><small>TÉLÉMÉTRIE RÉSEAU</small><strong>Serveur TCP + UDP</strong><span>TCP 9000 · UDP 9001 · traitement concurrent</span></div>
        </div>
      </div>
      <div className="collab-protocols" aria-label="Rôle des transports réseau">
        <div><span>TCP</span><strong>Actions critiques</strong><small>Connexion + accusé de réception</small></div>
        <div><span>UDP</span><strong>Notifications rapides</strong><small>Datagrammes sans connexion</small></div>
        <div><span>SQL</span><strong>État collaboratif</strong><small>Persistance relationnelle</small></div>
      </div>
      <div className="architecture-diagram__legend"><span><i /> FLUX DOCUMENTÉS DANS LE DÉPÔT</span><span>FLASK · SOCKETS · POSTGRESQL</span></div>
    </figure>
  )
}

function NetworkResourceDiagram({ project }: { project: ProjectDetail }) {
  return (
    <figure className="resource-diagram" aria-labelledby={`architecture-title-${project.slug}`}>
      <figcaption className="architecture-diagram__head">
        <span id={`architecture-title-${project.slug}`}>RESOURCE PIPELINE // {project.index}</span>
        <span>LOGICAL PROJECT VIEW</span>
      </figcaption>
      <div className="resource-diagram__canvas">
        <div className="resource-node"><small>ENTRÉE</small><strong>Interface Web</strong><span>Demande et paramètres réseau</span></div>
        <div className="resource-arrow" aria-hidden="true"><i /></div>
        <div className="resource-node resource-node--core"><small>APPLICATION</small><strong>Python / Flask</strong><span>Validation · logique d’attribution</span></div>
        <div className="resource-arrow" aria-hidden="true"><i /></div>
        <div className="resource-node"><small>SOURCE DE VÉRITÉ</small><strong>PostgreSQL</strong><span>Ressources et données d’adressage</span></div>
      </div>
      <div className="resource-generator">
        <div className="resource-generator__head"><span>GÉNÉRATION</span><strong>Moteur de configuration</strong><small>Transformation des ressources en paramètres réseau</small></div>
        <div className="resource-generator__items">
          <div><span>01</span><strong>IP</strong><small>Attribution d’adresses</small></div>
          <div><span>02</span><strong>VLAN</strong><small>Segmentation logique</small></div>
          <div><span>03</span><strong>VRF</strong><small>Contexte de routage</small></div>
          <div><span>04</span><strong>CONFIG</strong><small>Éléments pour équipements réseau</small></div>
        </div>
      </div>
      <div className="architecture-diagram__legend"><span><i /> CHAÎNE FONCTIONNELLE DU PROJET</span><span>WEB · FLASK · POSTGRESQL · AUTOMATISATION</span></div>
    </figure>
  )
}

function ArchitectureDiagram({ project }: { project: ProjectDetail }) {
  if (project.slug === 'pentest-controle') return <PentestLabDiagram project={project} />
  if (project.slug === 'application-collaborative') return <CollaborativeAppDiagram project={project} />
  if (project.slug === 'gestionnaire-reseau') return <NetworkResourceDiagram project={project} />
  return (
    <figure className="architecture-diagram" aria-labelledby={`architecture-title-${project.slug}`}>
      <figcaption className="architecture-diagram__head">
        <span id={`architecture-title-${project.slug}`}>TOPOLOGY // {project.index}</span>
        <span>LOGICAL VIEW</span>
      </figcaption>
      <div className="architecture-diagram__canvas">
        {project.architecture.map((item, index) => {
          const [source, ...targets] = item.split('→').map((part) => part.trim())
          return (
            <div className="architecture-diagram__route" key={item}>
              <span className="architecture-diagram__index">{String(index + 1).padStart(2, '0')}</span>
              <div className="architecture-diagram__node architecture-diagram__node--source"><small>SOURCE</small><strong>{source}</strong></div>
              <span className="architecture-diagram__link" aria-hidden="true"><i /></span>
              <div className="architecture-diagram__node architecture-diagram__node--target"><small>DESTINATION</small><strong>{targets.join(' → ')}</strong></div>
            </div>
          )
        })}
      </div>
      <div className="architecture-diagram__legend"><span><i /> ACTIVE ROUTE</span><span>{project.architecture.length} SEGMENTS DOCUMENTÉS</span></div>
    </figure>
  )
}

function EvidencePanel({ index, items, suffix }: { index: string; items: readonly { label: string; title: string; text: string }[]; suffix: string }) {
  return (
    <div className="evidence-panel" aria-label="Livrables et preuves de réalisation du projet">
      <div className="evidence-panel__head"><span>PROJECT EVIDENCE // {index}</span><span>{items.length} {suffix}</span></div>
      <div className="evidence-grid">
        {items.map((item) => (
          <article className="evidence-card" key={item.label}>
            <span className="evidence-card__index">{item.label}</span>
            <div><h3>{item.title}</h3><p>{item.text}</p></div>
          </article>
        ))}
      </div>
    </div>
  )
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="case-study">
      <a className="skip-link" href="#case-content">Aller au contenu principal</a>
      <header className="case-header">
        <a className="brand" href="/" aria-label="Retour à l'accueil">RG<span>.</span></a>
        <a className="case-back" href="/">← RETOUR AU RÉSEAU DE PROJETS</a>
      </header>

      <main id="case-content">
        <section className="case-hero">
          <p className="case-index">{project.index} // CASE STUDY</p>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <div className="case-meta">
            <div><span>ANNÉE</span><strong>{project.year}</strong></div>
            <div><span>CONTEXTE</span><strong>{project.context}</strong></div>
            <div><span>ÉQUIPE</span><strong>{project.team}</strong></div>
            <div><span>RÔLE</span><strong>{project.role}</strong></div>
          </div>
          {project.note && <aside className="case-note">{project.note}</aside>}
        </section>

        <NumberedSection number="01" title="PROBLÈME"><p className="case-lead">{project.problem}</p></NumberedSection>
        <NumberedSection number="02" title="ARCHITECTURE">
          <ArchitectureDiagram project={project} />
          {project.slug === 'infrastructure-securisee' && <EvidencePanel index="PRJ_01" items={prj01Evidence} suffix="LIVRABLES DOCUMENTÉS" />}
          {project.slug === 'application-collaborative' && <EvidencePanel index="PRJ_03" items={prj03Evidence} suffix="PREUVES DANS LE CODE" />}
        </NumberedSection>
        <NumberedSection number="03" title="MA CONTRIBUTION"><div className="case-list">{project.contribution.map((item) => <p key={item}>{item}</p>)}</div></NumberedSection>
        <NumberedSection number="04" title="CHOIX TECHNIQUES"><div className="choice-grid">{project.choices.map((choice) => <article key={choice.title}><h3>{choice.title}</h3><p>{choice.text}</p></article>)}</div></NumberedSection>
        <NumberedSection number="05" title="DIFFICULTÉS → SOLUTIONS"><div className="difficulty-grid">{project.difficulties.map((item) => <article key={item.problem}><div><span>PROBLÈME</span><p>{item.problem}</p></div><div><span>SOLUTION</span><p>{item.solution}</p></div></article>)}</div></NumberedSection>
        <NumberedSection number="06" title="RÉSULTATS"><div className="case-list case-list--results">{project.results.map((item) => <p key={item}>{item}</p>)}</div></NumberedSection>
        <NumberedSection number="07" title="CE QUE J’AMÉLIORERAIS AUJOURD’HUI"><div className="improvement-panel">{project.improvements.map((item) => <p key={item}>{item}</p>)}</div></NumberedSection>

        <section className="case-footer-panel"><div><span className="case-footer-panel__label">TECHNOLOGIES</span><div className="tag-row">{project.technologies.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div></div>{project.github && <a className="button button--ghost" href={project.github} target="_blank" rel="noreferrer" aria-label={`Voir le dépôt GitHub de ${project.title} dans un nouvel onglet`}>VOIR LE DÉPÔT GITHUB ↗</a>}</section>
      </main>

      <footer className="case-site-footer"><a className="brand" href="/" aria-label="Retour à l'accueil">RG<span>.</span></a><span>NETWORK OBSERVATORY // {project.index}</span></footer>
    </div>
  )
}
