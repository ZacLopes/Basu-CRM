import { FiAlertTriangle, FiFileText, FiHome, FiMail, FiRefreshCw } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import { MetricCard } from '../common/MetricCard'
import './modules.css'

const residents = [
  {
    name: 'Camila Duarte',
    unit: 'Residencial Atlântico • Apto 903',
    status: 'Pagamento em dia',
    contractEnd: 'Vence em 45 dias',
    openTickets: 1,
    timeline: 'IA enviou lembrete de renovação e abriu ticket de pintura',
  },
  {
    name: 'Eduardo Lima',
    unit: 'Skyline Offices • Sala 804',
    status: 'Atraso 5 dias',
    contractEnd: 'Vence em 6 meses',
    openTickets: 0,
    timeline: 'IA negociando parcelamento e disparou acordo por e-mail',
  },
  {
    name: 'Ana Bezerra',
    unit: 'Loteamento Vista Verde • Lote 12',
    status: 'Pagamentos automáticos',
    contractEnd: 'Vence em 1 ano',
    openTickets: 2,
    timeline: 'IA registrou pedido de poda e encaminhou à manutenção',
  },
]

export function ResidentsModule() {
  return (
    <section className="module" id="residentes">
      <SectionHeader
        title="Residentes"
        subtitle="Respostas imediatas, gestão de contratos e tickets sem esforço manual"
        actions={<button type="button">Adicionar residente</button>}
      />

      <div className="module__grid module__grid--metrics">
        <MetricCard
          label="Residentes ativos"
          value="312"
          helper="97% com atendimento automático"
          icon={<FiHome />}
          trend={{ value: '+21 novos este mês', positive: true }}
        />
        <MetricCard
          label="Tickets abertos"
          value="18"
          helper="6 com prioridade crítica"
          icon={<FiAlertTriangle />}
          trend={{ value: '-4 vs semana passada', positive: true }}
        />
        <MetricCard
          label="Renovações ativas"
          value="28"
          helper="IA disparou lembretes e contratos"
          icon={<FiRefreshCw />}
          trend={{ value: '+12 agendadas', positive: true }}
        />
      </div>

      <div className="module__card">
        <header>
          <h3>Monitoramento 360º</h3>
          <span>Histórico completo de interações, cobranças e tickets gerenciados pela IA</span>
        </header>
        <div className="resident-list">
          {residents.map((resident) => (
            <article key={resident.name} className="resident-list__item">
              <div className="resident-list__main">
                <h4>{resident.name}</h4>
                <span>{resident.unit}</span>
              </div>
              <div className="resident-list__status">
                <span className="status-pill">{resident.status}</span>
                <span className="status-subtle">{resident.contractEnd}</span>
              </div>
              <div className="resident-list__tickets">
                <strong>{resident.openTickets}</strong>
                <span>tickets abertos</span>
              </div>
              <p className="resident-list__timeline">
                <FiMail /> {resident.timeline}
              </p>
              <div className="resident-list__actions">
                <button type="button">
                  <FiFileText /> Contrato
                </button>
                <button type="button" className="outline">
                  Histórico completo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
