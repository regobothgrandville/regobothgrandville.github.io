import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const siteUrl = 'https://regobothgrandville.github.io'
const pages = [
  {
    path: 'projects/infrastructure-securisee',
    title: 'Infrastructure sécurisée & haute disponibilité',
    description: 'Concevoir une architecture virtualisée, segmentée et résiliente à partir d’un besoin client simulé.',
  },
  {
    path: 'projects/pentest-controle',
    title: 'Laboratoire de test d’intrusion contrôlé',
    description: 'Conduire un audit offensif dans un environnement isolé, de la découverte à la remédiation.',
  },
  {
    path: 'projects/application-collaborative',
    title: 'Application réseau collaborative',
    description: 'Développer une application client/serveur avec persistance, authentification et échanges réseau.',
  },
  {
    path: 'projects/gestionnaire-reseau',
    title: 'Gestionnaire de ressources réseau',
    description: 'Automatiser l’attribution de ressources et la génération de configurations à partir d’une application Web.',
  },
  {
    path: 'experience/stage-ia-company',
    title: 'Stage Développeur & Sécurité chez IA Company',
    description: 'Retour détaillé sur huit semaines de stage chez IA Company : développement logiciel, cybersécurité, étude de migration de messagerie et développement mobile.',
  },
]

const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const baseHtml = await readFile(join('dist', 'index.html'), 'utf8')

for (const page of pages) {
  const title = `${page.title} | Regoboth Grandville`
  const canonical = `${siteUrl}/${page.path}`
  const escapedTitle = escapeAttribute(title)
  const escapedDescription = escapeAttribute(page.description)
  let html = baseHtml

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapedTitle}</title>`)
  html = html.replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${escapedDescription}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(" \/>)/, `$1${escapedTitle}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(" \/>)/, `$1${escapedDescription}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(" \/>)/, `$1${canonical}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/, `$1${escapedTitle}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/, `$1${escapedDescription}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${canonical}$2`)

  const requiredMetadata = [
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    `<title>${escapedTitle}</title>`,
    `<meta name="description" content="${escapedDescription}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<link rel="canonical" href="${canonical}" />`,
  ]

  for (const expected of requiredMetadata) {
    if (!html.includes(expected)) {
      throw new Error(`Static metadata generation failed for ${page.path}: missing ${expected}`)
    }
  }

  const outputDir = join('dist', ...page.path.split('/'))
  await mkdir(outputDir, { recursive: true })
  await writeFile(join(outputDir, 'index.html'), html)
}

console.log(`Generated ${pages.length} static entry pages.`)
