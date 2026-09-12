import type { PortfolioProject, ProjectId } from '../data/projects'

interface ProjectCardProps {
  project: PortfolioProject
  index: number
  active?: boolean
  onActivate?: (id: ProjectId) => void
  onDeactivate?: () => void
}

export function ProjectCard({ project, index, active = false, onActivate, onDeactivate }: ProjectCardProps) {
  const activate = () => onActivate?.(project.id)

  return (
    <article
      className={`project-card${active ? ' project-card--active' : ''}`}
      onMouseEnter={activate}
      onMouseLeave={onDeactivate}
      onFocus={activate}
      onBlur={onDeactivate}
    >
      <span className="project-card__signal" aria-hidden="true" />
      <div className="project-card__topline">
        <span className="project-card__id">PRJ_{String(index + 1).padStart(2, '0')}</span>
        <span className="project-card__status">● ONLINE</span>
      </div>
      <div className={`project-card__signature project-card__signature--${project.id}`} aria-hidden="true">
        <span className="project-card__signature-node project-card__signature-node--a" />
        <i className="project-card__signature-link project-card__signature-link--a" />
        <span className="project-card__signature-node project-card__signature-node--b" />
        <i className="project-card__signature-link project-card__signature-link--b" />
        <span className="project-card__signature-node project-card__signature-node--c" />
        <span className="project-card__signature-packet" />
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-row">
        {project.domains.map((domain) => (
          <span className="tech-tag" key={domain}>{domain}</span>
        ))}
      </div>
      <a className="text-link" href={project.href} aria-label={`Ouvrir l'étude de cas : ${project.title}`}>
        OUVRIR L’ÉTUDE DE CAS →
      </a>
    </article>
  )
}
