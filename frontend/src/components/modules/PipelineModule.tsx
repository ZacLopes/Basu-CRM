import { FiFlag, FiTrendingUp } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import './modules.css'

const funnelStages = [
  {
    stage: 'Lead gerado',
    count: 312,
    value: 'R$ 18,4M',
    conversion: '100% base',
  },
  {
    stage: 'Em atendimento',
    count: 198,
    value: 'R$ 11,2M',
    conversion: '63% dos leads',
  },
  {
    stage: 'Contato realizado pelo corretor',
    count: 142,
    value: 'R$ 9,5M',
    conversion: '45% dos leads',
  },
  {
    stage: 'Proposta enviada',
    count: 68,
    value: 'R$ 6,1M',
    conversion: '22% dos leads',
  },
  {
    stage: 'Elaboração de contrato',
    count: 34,
    value: 'R$ 3,8M',
    conversion: '11% dos leads',
  },
  {
    stage: 'Venda ganha',
    count: 18,
    value: 'R$ 2,6M',
    conversion: '6% dos leads',
  },
  {
    stage: 'Leads descartados',
    count: 54,
    value: '-',
    conversion: '17% dos leads',
  },
]

export function PipelineModule() {
  return (
    <section className="module" id="funil">
      <SectionHeader
        title="Funil de vendas"
        subtitle="Acompanhamento em tempo real das etapas com insights de conversão"
        actions={<button type="button">Exportar funil</button>}
      />

      <div className="module__card funnel">
        <header>
          <h3>Panorama comercial</h3>
          <span>
            <FiTrendingUp /> IA projeta conversão de 9,3% para o mês baseado no comportamento dos leads
          </span>
        </header>
        <div className="funnel__content">
          {funnelStages.map((stage) => (
            <div key={stage.stage} className="funnel__row">
              <div className="funnel__stage">
                <FiFlag />
                <span>{stage.stage}</span>
              </div>
              <div className="funnel__bar">
                <div className="funnel__bar-progress" style={{ width: `${Math.max(stage.count / 3.5, 12)}%` }} />
              </div>
              <div className="funnel__metrics">
                <strong>{stage.count}</strong>
                <span>{stage.value}</span>
                <small>{stage.conversion}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
