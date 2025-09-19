import { FiBell, FiCalendar, FiCpu, FiSearch, FiSettings, FiUser } from 'react-icons/fi'
import './layout.css'

export function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__search">
        <FiSearch />
        <input type="search" placeholder="Buscar leads, residentes, tickets..." />
      </div>

      <div className="topbar__actions">
        <div className="topbar__ai-status">
          <FiCpu />
          <div>
            <span>IA Assistente</span>
            <strong>Operando 24/7</strong>
          </div>
        </div>
        <button type="button" className="topbar__button" title="Agenda Inteligente">
          <FiCalendar />
        </button>
        <button type="button" className="topbar__button" title="Central de Notificações">
          <FiBell />
        </button>
        <button type="button" className="topbar__button" title="Configurações">
          <FiSettings />
        </button>
        <div className="topbar__profile" title="Perfil">
          <span>Carol</span>
          <FiUser />
        </div>
      </div>
    </header>
  )
}
