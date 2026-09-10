import type { ReactNode } from 'react'
import type { ProjectDetail } from '../data/projectDetails'

interface ProjectCaseStudyProps {
  project: ProjectDetail
}

function NumberedSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="case-section">
      <div className="case-section__label"><span>{number}</span><strong>{title}</strong></div>
      <div className="case-section__content">{children}</div>
    </section>
  )
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="case-study">
      <a className="skip-link" href="#case-content">Aller au contenu principal</a>
      <header className="case-header">
        <a className="brand" href="/" aria-label="Retour à l'accueil">RG<span>.</span></a>
        <a className="case-back" href="/#projets">← RETOUR AU RÉSEAU DE PROJETS</a>
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

        <NumberedSection number="01" title="PROBLÈME">
          <p className="case-lead">{project.problem}</p>
        </NumberedSection>

        <NumberedSection number="02" title="ARCHITECTURE">
          <div className="architecture-flow">
            {project.architecture.map((item, index) => (
              <div className="architecture-flow__row" key={item}>
                <span className="architecture-flow__node">{String(index + 1).padStart(2, '0')}</span>
                <span className="architecture-flow__line" aria-hidden="true" />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </NumberedSection>

        <NumberedSection number="03" title="MA CONTRIBUTION">
          <div className="case-list">
            {project.contribution.map((item) => <p key={item}>{item}</p>)}
          </div>
        </NumberedSection>

        <NumberedSection number="04" title="CHOIX TECHNIQUES">
          <div className="choice-grid">
            {project.choices.map((choice) => (
              <article key={choice.title}><h3>{choice.title}</h3><p>{choice.text}</p></article>
            ))}
          </div>
        </NumberedSection>

        <NumberedSection number="05" title="DIFFICULTÉS → SOLUTIONS">
          <div className="difficulty-grid">
            {project.difficulties.map((item) => (
              <article key={item.problem}>
                <div><span>PROBLÈME</span><p>{item.problem}</p></div>
                <div><span>SOLUTION</span><p>{item.solution}</p></div>
              </article>
            ))}
          </div>
        </NumberedSection>

        <NumberedSection number="06" title="RÉSULTATS">
          <div className="case-list case-list--results">{project.results.map((item) => <p key={item}>{item}</p>)}</div>
        </NumberedSection>

        <NumberedSection number="07" title="CE QUE J’AMÉLIORERAIS AUJOURD’HUI">
          <div className="improvement-panel">
            {project.improvements.map((item) => <p key={item}>{item}</p>)}
          </div>
        </NumberedSection>

        <section className="case-footer-panel">
          <div>
            <span className="case-footer-panel__label">TECHNOLOGIES</span>
            <div className="tag-row">{project.technologies.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div>
          </div>
          {project.github && <a className="button button--ghost" href={project.github} target="_blank" rel="noreferrer" aria-label={`Voir le dépôt GitHub de ${project.title} dans un nouvel onglet`}>VOIR LE DÉPÔT GITHUB ↗</a>}
        </section>
      </main>

      <footer className="case-site-footer"><a className="brand" href="/" aria-label="Retour à l'accueil">RG<span>.</span></a><span>NETWORK OBSERVATORY // {project.index}</span></footer>
    </div>
  )
}
