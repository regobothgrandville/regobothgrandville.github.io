import type { PortfolioProject } from '../data/projects'

interface ProjectCardProps {
  project: PortfolioProject
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
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
      <a className="text-link" href={project.href}>OUVRIR L’ÉTUDE DE CAS →</a>
    </article>
  )
}
