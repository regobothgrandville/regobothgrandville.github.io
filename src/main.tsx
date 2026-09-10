import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { projectDetails } from './data/projectDetails'
import { NotFound } from './pages/NotFound'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import './styles/global.css'
import './styles/case-study.css'
import './styles/polish.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const setMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

const setCanonical = (href: string) => {
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', href)
}

const defaultTitle = 'Regoboth Grandville | Réseaux · Systèmes · Cybersécurité'
const defaultDescription = 'Portfolio de Regoboth Grandville, étudiant en Réseaux et Télécommunications, parcours Cybersécurité.'

function Router() {
  const [path, setPath] = useState(window.location.pathname)
  const normalizedPath = path.replace(/\/$/, '') || '/'
  const project = projectDetails.find((item) => normalizedPath === `/projects/${item.slug}`)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (project) {
      const title = `${project.title} | Regoboth Grandville`
      const canonical = `https://regobothgrandville.github.io/projects/${project.slug}`
      document.title = title
      setMetaContent('meta[name="description"]', project.subtitle)
      setMetaContent('meta[name="robots"]', 'index,follow')
      setMetaContent('meta[property="og:title"]', title)
      setMetaContent('meta[property="og:description"]', project.subtitle)
      setMetaContent('meta[property="og:url"]', canonical)
      setMetaContent('meta[name="twitter:title"]', title)
      setMetaContent('meta[name="twitter:description"]', project.subtitle)
      setCanonical(canonical)
      return
    }

    if (normalizedPath === '/') {
      document.title = defaultTitle
      setMetaContent('meta[name="description"]', defaultDescription)
      setMetaContent('meta[name="robots"]', 'index,follow')
      setMetaContent('meta[property="og:title"]', defaultTitle)
      setMetaContent('meta[property="og:description"]', defaultDescription)
      setMetaContent('meta[property="og:url"]', 'https://regobothgrandville.github.io/')
      setMetaContent('meta[name="twitter:title"]', defaultTitle)
      setMetaContent('meta[name="twitter:description"]', defaultDescription)
      setCanonical('https://regobothgrandville.github.io/')
      return
    }

    const title = 'Page introuvable | Regoboth Grandville'
    const description = 'Cette route ne correspond à aucune page du portfolio de Regoboth Grandville.'
    const canonical = `${window.location.origin}${normalizedPath}`
    document.title = title
    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[name="robots"]', 'noindex,follow')
    setMetaContent('meta[property="og:title"]', title)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[property="og:url"]', canonical)
    setMetaContent('meta[name="twitter:title"]', title)
    setMetaContent('meta[name="twitter:description"]', description)
    setCanonical(canonical)
  }, [normalizedPath, project])

  if (project) return <ProjectCaseStudy project={project} />
  if (normalizedPath === '/') return <App />
  return <NotFound />
}

createRoot(root).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
