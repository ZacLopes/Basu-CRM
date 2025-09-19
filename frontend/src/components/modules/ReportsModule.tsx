import { FiBarChart2, FiDownloadCloud, FiPieChart, FiTrendingUp } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import './modules.css'

const kpis = [
  {
    label: 'Taxa de conversão geral',
    value: '9,3%',
    description: 'IA contribuiu para +3,1 pts na conversão final',
    progress: 72,
  },
  {
    label: 'Respostas automáticas concluídas',
    value: '1.284',
    description: 'Cobertura de 88% das interações iniciais',
    progress: 88,
  },
  {
    label: 'Inadimplência reduzida',
    value: '-27%',
    description: 'Comparativo com o trimestre anterior',
    progress: 54,
  },
]

const performanceByTeam = [
  { team: 'Equipe Lançamentos', conversion: 14.2, leads: 84 },
  { team: 'Equipe Comercial', conversion: 11.3, leads: 122 },
  { team: 'Equipe Locação', conversion: 8.5, leads: 56 },
]

export function ReportsModule() {
  return (
    <section className="module" id="relatorios">
      <SectionHeader
        title="Relatórios e Insights"
        subtitle="Dashboards com métricas acionáveis e comparativos entre equipes"
        actions={<button type="button">Exportar relatório</button>}
      />

      <div className="module__card reports">
        <header>
          <h3>KPIs principais</h3>
          <span>
            <FiTrendingUp /> IA destaca tendências e próximos passos sugeridos
          </span>
        </header>
        <div className="reports__kpis">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="reports__kpi-card">
              <div className="reports__kpi-header">
                <FiPieChart />
                <span>{kpi.label}</span>
              </div>
              <strong>{kpi.value}</strong>
              <p>{kpi.description}</p>
              <div className="reports__progress">
                <div className="reports__progress-bar" style={{ width: `${kpi.progress}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="reports__comparison">
          <h4>Performance por equipe</h4>
          <div className="reports__bars">
            {performanceByTeam.map((team) => (
              <div key={team.team} className="reports__bar-row">
                <div className="reports__bar-label">
                  <span>{team.team}</span>
                  <small>{team.leads} leads ativos</small>
                </div>
                <div className="reports__bar-track">
                  <div
                    className="reports__bar-fill"
                    style={{ width: `${Math.min(team.conversion * 6, 100)}%` }}
                  />
                </div>
                <span className="reports__bar-value">{team.conversion}%</span>
              </div>
            ))}
          </div>
        </div>

        <footer className="reports__footer">
          <button type="button">
            <FiDownloadCloud /> Exportar CSV
          </button>
          <button type="button" className="outline">
            <FiBarChart2 /> Ver dashboard avançado
          </button>
        </footer>
      </div>
    </section>
  )
}
