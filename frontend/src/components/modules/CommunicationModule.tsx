import { FiCpu, FiFilter, FiMail, FiMessageCircle, FiPhone, FiUserCheck } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import './modules.css'

const conversations = [
  {
    participant: 'Thiago Ferreira',
    channel: 'WhatsApp',
    summary: 'IA respondeu dúvidas sobre metragem e vagas de garagem',
    updatedAt: 'há 2 min',
    handledByAI: true,
  },
  {
    participant: 'Equipe Financeiro',
    channel: 'E-mail',
    summary: 'Cobrança automática enviada para residentes inadimplentes',
    updatedAt: 'há 12 min',
    handledByAI: true,
  },
  {
    participant: 'Fernanda Nunes',
    channel: 'Ligação',
    summary: 'Solicitou contato humano para negociação de proposta',
    updatedAt: 'há 18 min',
    handledByAI: false,
  },
]

export function CommunicationModule() {
  return (
    <section className="module" id="comunicacao">
      <SectionHeader
        title="Mensagens e Comunicação"
        subtitle="Caixa de entrada unificada com IA triando e mantendo o tom configurado"
        actions={
          <>
            <button type="button">
              <FiFilter /> Filtrar
            </button>
            <button type="button">
              <FiUserCheck /> Assumir conversa
            </button>
          </>
        }
      />

      <div className="module__card">
        <header>
          <h3>Inbox inteligente</h3>
          <span>Visualize em tempo real quem está sendo atendido pela IA e pelo time</span>
        </header>
        <div className="inbox">
          {conversations.map((conversation) => (
            <div key={conversation.participant} className="inbox__item">
              <div className="inbox__icon">
                {conversation.channel === 'Ligação' ? <FiPhone /> : <FiMessageCircle />}
              </div>
              <div className="inbox__content">
                <strong>{conversation.participant}</strong>
                <span>{conversation.summary}</span>
                <small>Atualizado {conversation.updatedAt}</small>
              </div>
              <span className="inbox__channel">{conversation.channel}</span>
              <div className="inbox__status">
                {conversation.handledByAI ? (
                  <span className="badge">
                    <FiCpu /> Respondido pela IA
                  </span>
                ) : (
                  <span className="badge badge--human">
                    <FiUserCheck /> Em atendimento humano
                  </span>
                )}
              </div>
              <button type="button" className="inbox__cta">
                <FiMail /> Abrir conversa
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
