import { useState } from 'react'
import { NetworkNode } from './components/NetworkNode'
import { ProjectCard } from './components/ProjectCard'
import { SectionLabel } from './components/SectionLabel'
import { projects, type ProjectId } from './data/projects'
import { skillGroups } from './data/skills'

const navigation = [
  ['PROFIL', '#profil'], ['COMPÉTENCES', '#competences'], ['PROJETS', '#projets'], ['EXPÉRIENCE', '#experience'], ['CONTACT', '#contact'],
] as const

function App() {
  const [activeProject, setActiveProject] = useState<ProjectId | null>(null)
  const activeProjectData = projects.find((project) => project.id === activeProject)

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut">RG<span>.</span></a>
        <nav aria-label="Navigation principale">{navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <a className="button button--small button--ghost" href="#contact">CV ↗</a>
      </header>

      <main>
        <section className="hero section" id="top" aria-labelledby="portfolio-title">
          <div className="hero__copy">
            <div className="availability"><span /> DISPONIBLE · STAGE FÉVRIER 2027</div>
            <h1 id="portfolio-title"><span>REGOBOTH</span><span>GRANDVILLE</span></h1>
            <p className="hero__positioning">Réseaux · Systèmes · Cybersécurité</p>
            <p className="hero__intro">Étudiant en 3e année de BUT Réseaux & Télécommunications, parcours Cybersécurité. Je conçois, sécurise et automatise des infrastructures et applications communicantes.</p>
            <div className="hero__actions"><a className="button button--primary" href="#projets">Explorer mes projets</a><a className="button button--ghost" href="https://github.com/regobothgrandville" target="_blank" rel="noreferrer">GitHub ↗</a></div>
            <div className="hero__meta"><span>3E ANNÉE</span><span>PARCOURS CYBER</span><span>ÎLE-DE-FRANCE</span></div>
          </div>
          <div className="observatory" aria-label="Topologie représentant mes domaines techniques">
            <div className="observatory__halo" />
            <div className="portrait-frame">
              <span className="portrait-frame__edge" />
              <span className="portrait-frame__node">NODE_00 // PROFILE</span>
              <img className="portrait-image" src="/images/portrait.jpg" alt="Portrait de Regoboth Grandville" width="300" height="400" fetchPriority="high" />
              <span className="portrait-frame__scan" aria-hidden="true" />
            </div>
            <span className="connection connection--a"><i /></span><span className="connection connection--b"><i /></span><span className="connection connection--c"><i /></span><span className="connection connection--d"><i /></span>
            <NetworkNode label="SÉCURITÉ" className="node--security" active /><NetworkNode label="RÉSEAU" className="node--network" /><NetworkNode label="SYSTÈMES" className="node--systems" /><NetworkNode label="AUTOMATISATION" className="node--automation" active />
            <div className="telemetry"><span>OBSERVABILITÉ // ACTIVE</span><strong>04</strong><small>DOMAINES CONNECTÉS</small></div>
          </div>
          <a className="scroll-cue" href="#profil">DÉFILER <span>↓</span></a>
        </section>

        <section className="section split-section" id="profil">
          <div><SectionLabel index="01" title="PROFIL" /><h2>Je construis des infrastructures <em>compréhensibles, sécurisées et maintenables.</em></h2><p className="lead">Mon parcours en Réseaux & Télécommunications m'amène à considérer une infrastructure dans son ensemble : réseau, systèmes, sécurité, services et automatisation.</p></div>
          <aside className="info-panel"><p className="panel-label">INFORMATIONS DU PROFIL</p><dl><div><dt>FORMATION</dt><dd>BUT R&T · 3E ANNÉE</dd></div><div><dt>PARCOURS</dt><dd>CYBERSÉCURITÉ</dd></div><div><dt>LOCALISATION</dt><dd>ÎLE-DE-FRANCE</dd></div><div><dt>OBJECTIF</dt><dd>STAGE · FÉVRIER 2027</dd></div></dl></aside>
        </section>

        <section className="section" id="competences">
          <SectionLabel index="02" title="COMPÉTENCES TECHNIQUES" />
          <div className="section-heading-row"><h2>CAPACITÉS <em>SYSTÈME</em></h2><p>Pas de jauges artificielles : les technologies présentées correspondent à des compétences travaillées dans mes projets et ma formation.</p></div>
          <div className="skill-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.id}><div className="skill-card__head"><span>0{index + 1}</span><i /></div><h3>{group.label}</h3><div className="tag-row">{group.skills.map((skill) => <span className="tech-tag" key={skill}>{skill}</span>)}</div></article>)}</div>
        </section>

        <section className="section projects-section" id="projets">
          <SectionLabel index="03" title="RÉSEAU DE PROJETS" />
          <div className="section-heading-row"><h2>PROJETS <em>CONNECTÉS</em></h2><p>Quatre études de cas principales. Survolez ou sélectionnez un nœud pour inspecter ses domaines techniques.</p></div>
          <div className="project-network" data-active={activeProject ?? 'idle'}>
            <div className="project-network__telemetry" aria-live="polite"><span>ROUTE // {activeProjectData ? activeProjectData.id.toUpperCase().replace('-', '_') : 'IDLE'}</span><strong>{activeProjectData?.title ?? 'Réseau de projets'}</strong><small>{activeProjectData ? activeProjectData.domains.join(' · ') : 'Sélectionnez un projet pour activer le chemin'}</small></div>
            <div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} active={activeProject === project.id} onActivate={setActiveProject} onDeactivate={() => setActiveProject(null)} />)}</div>
          </div>
          <p className="other-nodes">AUTRES NŒUDS // SAÉ 2.1 · SAÉ 2.4</p>
        </section>

        <section className="section" id="experience"><SectionLabel index="04" title="EXPÉRIENCE" /><div className="experience-header"><div><p className="company">IA COMPANY</p><h2>Stage Développeur <em>& Sécurité</em></h2></div><span>JUIN — AOÛT 2026</span></div><p className="experience-intro">Une expérience mêlant prototypage logiciel, analyse de sécurité, étude de solutions et développement mobile, dans un contexte professionnel où la confidentialité fait partie des exigences.</p><div className="experience-grid"><article><span>01</span><h3>PYTHON / FLASK</h3><p>Prototypage de fonctionnalités à partir de données simulées.</p></article><article><span>02</span><h3>SÉCURITÉ</h3><p>Analyse des risques, conception et prototypage de mesures de sécurité.</p></article><article><span>03</span><h3>MOBILE</h3><p>Développement avec React Native, TypeScript, Expo et Git/GitHub.</p></article></div></section>

        <section className="section" id="parcours"><SectionLabel index="05" title="PARCOURS" /><div className="timeline"><article><span className="timeline__node" /><time>2024</time><h3>BAC GÉNÉRAL</h3><p>Mention Bien · Maths · NSI · Maths expertes</p></article><article><span className="timeline__node" /><time>2024</time><h3>BUT R&T</h3><p>IUT de Villetaneuse · Université Sorbonne Paris Nord</p></article><article><span className="timeline__node" /><time>2026</time><h3>CYBERSÉCURITÉ</h3><p>Parcours de spécialisation</p></article><article className="timeline__next"><span className="timeline__node" /><time>2027</time><h3>PROCHAINE ÉTAPE</h3><p>Stage de 4 mois · février</p></article></div></section>

        <section className="section contact-section" id="contact"><SectionLabel index="06" title="CONTACT" /><p className="contact-kicker">UN PROJET, UNE OPPORTUNITÉ, UNE CONNEXION ?</p><h2>Échangeons<span>.</span></h2><div className="contact-actions"><a className="button button--primary" href="mailto:rggrandville@gmail.com">ME CONTACTER →</a><div><a href="https://linkedin.com/in/rego-grandville" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/regobothgrandville" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="#top">CV ↗</a></div></div><div className="contact-status"><span /> DISPONIBLE POUR UN STAGE · FÉVRIER 2027</div></section>
      </main>
      <footer><a className="brand" href="#top">RG<span>.</span></a><span>RÉSEAUX · SYSTÈMES · CYBERSÉCURITÉ</span><span>PORTFOLIO NODE // ONLINE</span></footer>
    </div>
  )
}

export default App
