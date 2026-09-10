import type { MouseEvent } from 'react'
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
  const openProject = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.history.pushState(null, '', project.href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

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
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-row">
        {project.domains.map((domain) => (
          <span className="tech-tag" key={domain}>{domain}</span>
        ))}
      </div>
      <a className="text-link" href={project.href} onClick={openProject} aria-label={`Ouvrir l'étude de cas : ${project.title}`}>
        OUVRIR L’ÉTUDE DE CAS →
      </a>
    </article>
  )
}
