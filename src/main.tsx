import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { projectDetails } from './data/projectDetails'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import './styles/global.css'
import './styles/case-study.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/'
const project = projectDetails.find((item) => normalizedPath === `/projects/${item.slug}`)

if (project) {
  document.title = `${project.title} | Regoboth Grandville`
}

createRoot(root).render(
  <StrictMode>
    {project ? <ProjectCaseStudy project={project} /> : <App />}
  </StrictMode>,
)
