interface SectionLabelProps {
  index: string
  title: string
}

export function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="section-label" aria-hidden="true">
      <span>{index} //</span>
      <strong>{title}</strong>
    </div>
  )
}
