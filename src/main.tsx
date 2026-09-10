import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { projectDetails } from './data/projectDetails'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import './styles/global.css'
import './styles/case-study.css'
import './styles/polish.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/'
const project = projectDetails.find((item) => normalizedPath === `/projects/${item.slug}`)

const setMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

const setCanonical = (href: string) => {
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', href)
}

if (project) {
  const title = `${project.title} | Regoboth Grandville`
  const canonical = `https://regobothgrandville.github.io/projects/${project.slug}`

  document.title = title
  setMetaContent('meta[name="description"]', project.subtitle)
  setMetaContent('meta[property="og:title"]', title)
  setMetaContent('meta[property="og:description"]', project.subtitle)
  setMetaContent('meta[property="og:url"]', canonical)
  setMetaContent('meta[name="twitter:title"]', title)
  setMetaContent('meta[name="twitter:description"]', project.subtitle)
  setCanonical(canonical)
}

createRoot(root).render(
  <StrictMode>
    {project ? <ProjectCaseStudy project={project} /> : <App />}
  </StrictMode>,
)
