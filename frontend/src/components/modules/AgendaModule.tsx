import { FiCalendar, FiCheck, FiClock, FiMapPin, FiUser, FiVideo } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import { MetricCard } from '../common/MetricCard'
import './modules.css'

const tours = [
  {
    type: 'Tour presencial',
    property: 'Residencial Atlântico - Torre B',
    schedule: '17/04 às 15h',
    lead: 'Mariana Costa',
    createdByAI: true,
    location: 'Rua das Figueiras, 1450',
  },
  {
    type: 'Tour virtual',
    property: 'Skyline Offices - Sala 1304',
    schedule: '17/04 às 18h',
    lead: 'Vinicius Prado',
    createdByAI: false,
    location: 'Google Meet • Link enviado',
  },
  {
    type: 'Tour autoguiado',
    property: 'Loteamento Vista Verde - Lote 42',
    schedule: '18/04 às 10h',
    lead: 'Claudio Azevedo',
    createdByAI: true,
    location: 'Portaria inteligente - QR Code enviado',
  },
]

export function AgendaModule() {
  return (
    <section className="module" id="agenda">
      <SectionHeader
        title="Agenda inteligente"
        subtitle="Confirmações automáticas, lembretes multicanal e visualização integrada da equipe"
        actions={<button type="button">Ver calendário completo</button>}
      />

      <div className="module__grid module__grid--metrics">
        <MetricCard
          label="Tours hoje"
          value="12"
          helper="7 confirmados pela IA"
          icon={<FiCalendar />}
          trend={{ value: '+3 vs ontem', positive: true }}
        />
        <MetricCard
          label="Reagendamentos"
          value="2"
          helper="IA ajustou automaticamente"
          icon={<FiClock />}
          trend={{ value: '-1 semana passada', positive: true }}
        />
        <MetricCard
          label="Satisfação pós-tour"
          value="92%"
          helper="Com base em feedback automático"
          icon={<FiCheck />}
          trend={{ value: '+6 pts', positive: true }}
        />
      </div>

      <div className="module__card">
        <header>
          <h3>Próximos tours</h3>
          <span>Visualização compacta do calendário centralizado</span>
        </header>
        <div className="tour-list">
          {tours.map((tour) => (
            <article key={tour.lead} className="tour-list__item">
              <div className="tour-list__icon">
                {tour.type.includes('virtual') ? <FiVideo /> : <FiMapPin />}
              </div>
              <div className="tour-list__content">
                <div className="tour-list__header">
                  <strong>{tour.type}</strong>
                  {tour.createdByAI ? (
                    <span className="badge">Agendado pela IA</span>
                  ) : (
                    <span className="badge badge--human">Agendado pela equipe</span>
                  )}
                </div>
                <p>{tour.property}</p>
                <footer>
                  <span>
                    <FiCalendar /> {tour.schedule}
                  </span>
                  <span>
                    <FiUser /> {tour.lead}
                  </span>
                  <span>
                    <FiMapPin /> {tour.location}
                  </span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
