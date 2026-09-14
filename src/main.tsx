import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { projectDetails } from './data/projectDetails'
import { InternshipCaseStudy } from './pages/InternshipCaseStudy'
import { NotFound } from './pages/NotFound'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import './styles/global.css'
import './styles/case-study.css'
import './styles/polish.css'
import './styles/home-observatory.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/'
const project = projectDetails.find((item) => normalizedPath === `/projects/${item.slug}`)
const isInternship = normalizedPath === '/experience/stage-ia-company'

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
} else if (isInternship) {
  const title = 'Stage Développeur & Sécurité chez IA Company | Regoboth Grandville'
  const description = 'Retour détaillé sur huit semaines de stage chez IA Company : développement logiciel, cybersécurité, étude de migration de messagerie et développement mobile.'
  const canonical = 'https://regobothgrandville.github.io/experience/stage-ia-company'

  document.title = title
  setMetaContent('meta[name="description"]', description)
  setMetaContent('meta[property="og:title"]', title)
  setMetaContent('meta[property="og:description"]', description)
  setMetaContent('meta[property="og:url"]', canonical)
  setMetaContent('meta[name="twitter:title"]', title)
  setMetaContent('meta[name="twitter:description"]', description)
  setCanonical(canonical)
} else if (normalizedPath !== '/') {
  const title = 'Page introuvable | Regoboth Grandville'
  const description = 'Cette route ne correspond à aucune page du portfolio de Regoboth Grandville.'

  document.title = title
  setMetaContent('meta[name="description"]', description)
  setMetaContent('meta[name="robots"]', 'noindex,follow')
  setMetaContent('meta[property="og:title"]', title)
  setMetaContent('meta[property="og:description"]', description)
  setMetaContent('meta[property="og:url"]', window.location.href)
  setMetaContent('meta[name="twitter:title"]', title)
  setMetaContent('meta[name="twitter:description"]', description)
  setCanonical(window.location.href)
}

const page = project
  ? <ProjectCaseStudy project={project} />
  : isInternship
    ? <InternshipCaseStudy />
    : normalizedPath === '/'
      ? <App />
      : <NotFound />

createRoot(root).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
