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
  activeItemId: SidebarItem['id']
  onSelectItem: (id: SidebarItem['id']) => void
}

export function Sidebar({ items, activeItemId, onSelectItem }: SidebarProps) {
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
            <button
              key={item.id}
              type="button"
              className={`sidebar__link ${activeItemId === item.id ? 'sidebar__link--active' : ''}`.trim()}
              onClick={() => onSelectItem(item.id)}
              aria-current={activeItemId === item.id ? 'page' : undefined}
            >
              <item.icon className="sidebar__icon" />
              <span>{item.label}</span>
            </button>
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
