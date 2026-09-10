export interface SkillGroup {
  id: string
  label: string
  skills: readonly string[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'network',
    label: 'Réseau',
    skills: ['IPv4 / IPv6', 'VLAN / STP', 'RIP / OSPF', 'ACL', 'NAT / PAT', 'DHCP', 'OpenVPN'],
  },
  {
    id: 'systems',
    label: 'Systèmes',
    skills: ['Linux', 'Windows Server', 'Active Directory', 'Apache', 'DNS', 'SSH', 'NFS', 'PostgreSQL'],
  },
  {
    id: 'security',
    label: 'Sécurité',
    skills: ['pfSense', 'iptables', 'Fail2Ban', 'Snort', 'Nmap', 'OpenVAS', 'Wireshark', 'Kali Linux'],
  },
  {
    id: 'automation',
    label: 'Automatisation / Dev',
    skills: ['Python', 'Bash', 'PowerShell', 'Flask', 'React Native', 'TypeScript', 'Git / GitHub'],
  },
]
