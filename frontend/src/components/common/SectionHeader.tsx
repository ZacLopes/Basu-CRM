import type { ReactNode } from 'react'
import './common.css'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  actions?: ReactNode
  id?: string
}

export function SectionHeader({ title, subtitle, actions, id }: SectionHeaderProps) {
  return (
    <div className="section-header" id={id}>
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && <div className="section-header__actions">{actions}</div>}
    </div>
  )
}
