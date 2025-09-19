import {
  FiActivity,
  FiCalendar,
  FiCheckSquare,
  FiGrid,
  FiMapPin,
  FiMessageSquare,
  FiPieChart,
  FiTrendingUp,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi'
import './App.css'
import { Sidebar, type SidebarItem } from './components/layout/Sidebar'
import { TopBar } from './components/layout/TopBar'
import { LeadsModule } from './components/modules/LeadsModule'
import { AgendaModule } from './components/modules/AgendaModule'
import { ResidentsModule } from './components/modules/ResidentsModule'
import { CommunicationModule } from './components/modules/CommunicationModule'
import { TicketsModule } from './components/modules/TicketsModule'
import { MarketingModule } from './components/modules/MarketingModule'
import { PipelineModule } from './components/modules/PipelineModule'
import { PropertiesModule } from './components/modules/PropertiesModule'
import { ReportsModule } from './components/modules/ReportsModule'

const sidebarItems: SidebarItem[] = [
  { id: 'overview', label: 'Visão geral', icon: FiGrid },
  { id: 'leads', label: 'Leads / Prospects', icon: FiUserPlus },
  { id: 'agenda', label: 'Agenda / Tours', icon: FiCalendar },
  { id: 'residentes', label: 'Residentes', icon: FiUsers },
  { id: 'comunicacao', label: 'Comunicação', icon: FiMessageSquare },
  { id: 'tickets', label: 'Tarefas & Tickets', icon: FiCheckSquare },
  { id: 'campanhas', label: 'Marketing', icon: FiTrendingUp },
  { id: 'funil', label: 'Funil de vendas', icon: FiPieChart },
  { id: 'empreendimentos', label: 'Empreendimentos', icon: FiMapPin },
  { id: 'relatorios', label: 'Relatórios', icon: FiActivity },
]

function App() {
  return (
    <div className="app-shell">
      <Sidebar items={sidebarItems} />
      <div className="app-main">
        <TopBar />
        <main className="app-content">
          <section className="hero" id="overview">
            <h1>CRM Imobiliário com IA que trabalha 24/7 pela sua equipe</h1>
            <p>
              Centralize leads, tours, residentes e tickets em um fluxo único. A inteligência
              artificial responde, agenda, cria tarefas e gera insights para acelerar vendas e
              reduzir inadimplência.
            </p>
            <div className="hero__metrics">
              <div className="hero__metric">
                <span>Leads nutridos</span>
                <strong>1.284</strong>
                <small>IA engajou 88% sem intervenção humana</small>
              </div>
              <div className="hero__metric">
                <span>Tours desta semana</span>
                <strong>46</strong>
                <small>Agenda integrada com lembretes automáticos</small>
              </div>
              <div className="hero__metric">
                <span>Residentes ativos</span>
                <strong>312</strong>
                <small>Renovações e boletos acompanhados pela IA</small>
              </div>
              <div className="hero__metric">
                <span>Conversão projetada</span>
                <strong>9,3%</strong>
                <small>Funil otimizado com recomendações inteligentes</small>
              </div>
            </div>
          </section>

          <LeadsModule />
          <AgendaModule />
          <ResidentsModule />
          <CommunicationModule />
          <TicketsModule />
          <MarketingModule />
          <PipelineModule />
          <PropertiesModule />
          <ReportsModule />
        </main>
      </div>
    </div>
  )
}

export default App
