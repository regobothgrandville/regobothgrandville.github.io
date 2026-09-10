interface NetworkNodeProps {
  label: string
  className?: string
  active?: boolean
}

export function NetworkNode({ label, className = '', active = false }: NetworkNodeProps) {
  return (
    <div className={`network-node ${active ? 'network-node--active' : ''} ${className}`}>
      <span className="network-node__point" />
      <span className="network-node__label">{label}</span>
    </div>
  )
}
