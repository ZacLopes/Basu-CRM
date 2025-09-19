import type { IconType } from 'react-icons'
import { FiPlus } from 'react-icons/fi'
import './layout.css'

export type SidebarItem = {
  id: string
  label: string
  icon: IconType
}

interface SidebarProps {
  items: SidebarItem[]
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar__logo-symbol">B</div>
        <div className="sidebar__logo-text">
          <span>Basu</span>
          <strong>CRM</strong>
        </div>
      </div>

      <div className="sidebar__section">
        <span className="sidebar__section-label">Navegação</span>
        <nav className="sidebar__nav">
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="sidebar__link">
              <item.icon className="sidebar__icon" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar__section sidebar__section--footer">
        <button type="button" className="sidebar__cta">
          <FiPlus />
          Nova Automação
        </button>
        <p className="sidebar__footnote">
          IA ativa, monitorando leads, residentes e tickets em tempo real.
        </p>
      </div>
    </aside>
  )
}
