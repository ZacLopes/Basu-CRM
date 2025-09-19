import { FiArrowRightCircle, FiClipboard, FiClock, FiUsers } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import { MetricCard } from '../common/MetricCard'
import './modules.css'

const ticketColumns = [
  {
    title: 'Novo',
    tickets: [
      {
        subject: 'Vazamento cozinha - Torre B 303',
        requester: 'IA • Camila Duarte',
        priority: 'Alta',
        assignedTo: 'Time Manutenção',
        sla: 'SLA 2h',
      },
    ],
  },
  {
    title: 'Em andamento',
    tickets: [
      {
        subject: 'Segunda via boleto - Lote 12',
        requester: 'IA • Ana Bezerra',
        priority: 'Média',
        assignedTo: 'Financeiro',
        sla: 'SLA 6h',
      },
      {
        subject: 'Pré-reserva lote 42',
        requester: 'IA • Claudio Azevedo',
        priority: 'Alta',
        assignedTo: 'Comercial',
        sla: 'SLA 1h',
      },
    ],
  },
  {
    title: 'Aguardando cliente',
    tickets: [
      {
        subject: 'Ajuste contrato - Skyline Offices',
        requester: 'Equipe Comercial',
        priority: 'Média',
        assignedTo: 'Jurídico',
        sla: 'Resposta cliente',
      },
    ],
  },
  {
    title: 'Concluído',
    tickets: [
      {
        subject: 'Reserva confirmada - Apto 903',
        requester: 'IA • Julia Martins',
        priority: 'Alta',
        assignedTo: 'Backoffice',
        sla: 'Fechado em 3h',
      },
    ],
  },
]

export function TicketsModule() {
  return (
    <section className="module" id="tickets">
      <SectionHeader
        title="Tarefas e Tickets"
        subtitle="IA cria, prioriza e direciona automaticamente conforme o tipo de solicitação"
        actions={<button type="button">Criar ticket manualmente</button>}
      />

      <div className="module__grid module__grid--metrics">
        <MetricCard
          label="Tickets automáticos"
          value="74%"
          helper="Criados pela IA nas últimas 24h"
          icon={<FiClipboard />}
          trend={{ value: '+18% vs média', positive: true }}
        />
        <MetricCard
          label="Tempo médio de resolução"
          value="6h 12m"
          helper="Inclui tarefas multi-equipe"
          icon={<FiClock />}
          trend={{ value: '-2h esta semana', positive: true }}
        />
        <MetricCard
          label="Equipe engajada"
          value="12 colaboradores"
          helper="Todos dentro do SLA"
          icon={<FiUsers />}
          trend={{ value: '0 atrasos críticos', positive: true }}
        />
      </div>

      <div className="module__card ticket-board">
        {ticketColumns.map((column) => (
          <div key={column.title} className="ticket-column">
            <header>
              <h4>{column.title}</h4>
              <span>{column.tickets.length} em fila</span>
            </header>
            <div className="ticket-column__list">
              {column.tickets.map((ticket) => (
                <article key={ticket.subject} className="ticket-card">
                  <strong>{ticket.subject}</strong>
                  <span>{ticket.requester}</span>
                  <div className="ticket-card__meta">
                    <span className={`priority priority--${ticket.priority.toLowerCase()}`}>
                      {ticket.priority}
                    </span>
                    <span>{ticket.assignedTo}</span>
                    <span>{ticket.sla}</span>
                  </div>
                  <button type="button">
                    <FiArrowRightCircle /> Reatribuir
                  </button>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
