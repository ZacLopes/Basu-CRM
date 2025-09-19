import { FiBarChart2, FiEdit3, FiSend, FiTarget } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import { MetricCard } from '../common/MetricCard'
import './modules.css'

const campaigns = [
  {
    name: 'Campanha lançamento • Torre C',
    segment: 'Leads que interagiram com IA + interesse em 3 dorms',
    performance: 'Taxa de abertura 64% • Conversão 18%',
    status: 'Rodando',
  },
  {
    name: 'Renovação contratos comerciais',
    segment: 'Residentes com vencimento em 60 dias',
    performance: 'IA disparou 24 propostas com assinatura digital',
    status: 'Concluída',
  },
  {
    name: 'Campanha lead quente pós-tour',
    segment: 'Leads com tour nos últimos 3 dias',
    performance: 'Sequência multicanal ativa até resposta',
    status: 'Automação contínua',
  },
]

export function MarketingModule() {
  return (
    <section className="module" id="campanhas">
      <SectionHeader
        title="Campanhas de Marketing"
        subtitle="Segmentações sugeridas pela IA e resultados de ponta a ponta"
        actions={<button type="button">Criar campanha</button>}
      />

      <div className="module__grid module__grid--metrics">
        <MetricCard
          label="Base segmentada"
          value="8 clusters"
          helper="Sugestões atualizadas pela IA"
          icon={<FiTarget />}
          trend={{ value: '+2 novos clusters', positive: true }}
        />
        <MetricCard
          label="Taxa de resposta"
          value="37%"
          helper="Após ações combinadas de IA + humano"
          icon={<FiSend />}
          trend={{ value: '+11 pts nos últimos 30 dias', positive: true }}
        />
        <MetricCard
          label="Receita atribuída"
          value="R$ 1,2M"
          helper="Campanhas assistidas pela IA"
          icon={<FiBarChart2 />}
          trend={{ value: '+R$ 340K vs trimestre anterior', positive: true }}
        />
      </div>

      <div className="module__card">
        <header>
          <h3>Campanhas recentes</h3>
          <span>Histórico com recomendações de próxima melhor ação</span>
        </header>
        <div className="campaign-list">
          {campaigns.map((campaign) => (
            <article key={campaign.name} className="campaign-card">
              <div>
                <strong>{campaign.name}</strong>
                <span>{campaign.segment}</span>
              </div>
              <div className="campaign-card__details">
                <span>{campaign.performance}</span>
                <span className="status-pill">{campaign.status}</span>
              </div>
              <button type="button">
                <FiEdit3 /> Editar jornada
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
