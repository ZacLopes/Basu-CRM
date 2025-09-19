import { FiCheckCircle, FiClock, FiMail, FiMessageCircle, FiPhoneCall, FiUserPlus } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import { MetricCard } from '../common/MetricCard'
import './modules.css'

const leads = [
  {
    name: 'Mariana Costa',
    property: 'Residencial Atlântico - Torre B',
    status: 'Tour agendado',
    lastInteraction: 'IA agendou tour 17/04 às 15h',
    channel: 'WhatsApp',
    aiOwner: true,
  },
  {
    name: 'Claudio Azevedo',
    property: 'Loteamento Vista Verde - Lote 42',
    status: 'Novo',
    lastInteraction: 'IA respondeu sobre regras de financiamento',
    channel: 'Chat site',
    aiOwner: true,
  },
  {
    name: 'Julia Martins',
    property: 'Condomínio Horizonte - Apto 903',
    status: 'Proposta enviada',
    lastInteraction: 'Corretor Rafael enviou proposta',
    channel: 'E-mail',
    aiOwner: false,
  },
  {
    name: 'Lucas Tavares',
    property: 'Lote Lago Azul - 17',
    status: 'Em contato',
    lastInteraction: 'IA aguardando resposta há 2 dias',
    channel: 'SMS',
    aiOwner: true,
  },
]

export function LeadsModule() {
  return (
    <section className="module" id="leads">
      <SectionHeader
        title="Leads e Prospects"
        subtitle="Inteligência conversacional cuidando da pré-venda e sinalizando oportunidades quentes"
        actions={
          <>
            <button type="button">Assumir conversa</button>
            <button type="button">Criar contrato</button>
          </>
        }
      />

      <div className="module__grid module__grid--metrics">
        <MetricCard
          label="Leads ativos"
          value="128"
          helper="32 aguardando resposta da IA"
          icon={<FiUserPlus />}
          trend={{ value: '+18% vs mês anterior', positive: true }}
        />
        <MetricCard
          label="Tours agendados"
          value="46"
          helper="21 agendados pela IA"
          icon={<FiClock />}
          trend={{ value: '+9 nesta semana', positive: true }}
        />
        <MetricCard
          label="Tempo médio de resposta"
          value="1m 42s"
          helper="IA responde instantaneamente"
          icon={<FiMessageCircle />}
          trend={{ value: '-63%', positive: true }}
        />
      </div>

      <div className="module__card module__card--list">
        <header>
          <h3>Fila inteligente</h3>
          <span>Ordenado por probabilidade de conversão e SLA da IA</span>
        </header>
        <div className="lead-table">
          <div className="lead-table__head">
            <span>Lead</span>
            <span>Empreendimento</span>
            <span>Status</span>
            <span>Última interação</span>
            <span>Canal</span>
            <span>Ações rápidas</span>
          </div>
          {leads.map((lead) => (
            <div key={lead.name} className="lead-table__row">
              <div>
                <strong>{lead.name}</strong>
                {lead.aiOwner && <span className="badge badge--ai">IA ativa</span>}
              </div>
              <span>{lead.property}</span>
              <span className={`status status--${lead.status.toLowerCase().replace(/\s/g, '-')}`}>
                {lead.status}
              </span>
              <span>{lead.lastInteraction}</span>
              <span>{lead.channel}</span>
              <div className="lead-table__actions">
                <button type="button" title="Enviar mensagem">
                  <FiMail />
                </button>
                <button type="button" title="Iniciar ligação">
                  <FiPhoneCall />
                </button>
                <button type="button" title="Marcar como concluído">
                  <FiCheckCircle />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
