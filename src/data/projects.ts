export type ProjectId = 'prj-01' | 'prj-02' | 'prj-03' | 'prj-04'

export interface PortfolioProject {
  id: ProjectId
  title: string
  summary: string
  domains: readonly string[]
  href: string
}

export const projects: readonly PortfolioProject[] = [
  {
    id: 'prj-01',
    title: 'Infrastructure sécurisée & haute disponibilité',
    summary: 'Architecture virtualisée, segmentation, disponibilité, sauvegarde et analyse DICP.',
    domains: ['Réseau', 'Systèmes', 'Sécurité'],
    href: '/projects/infrastructure-securisee',
  },
  {
    id: 'prj-02',
    title: 'Laboratoire de test d’intrusion contrôlé',
    summary: 'Audit offensif réalisé dans un laboratoire isolé, de la découverte à la remédiation.',
    domains: ['Cybersécurité', 'Audit', 'Réseau'],
    href: '/projects/pentest-controle',
  },
  {
    id: 'prj-03',
    title: 'Application réseau collaborative',
    summary: 'Application client/serveur avec persistance, authentification et échanges réseau.',
    domains: ['Python', 'Réseau', 'SQL'],
    href: '/projects/application-collaborative',
  },
  {
    id: 'prj-04',
    title: 'Gestionnaire de ressources réseau',
    summary: 'Application Flask et PostgreSQL pour administrer des ressources et générer des configurations réseau.',
    domains: ['Flask', 'PostgreSQL', 'Automatisation'],
    href: '/projects/gestionnaire-reseau',
  },
]
