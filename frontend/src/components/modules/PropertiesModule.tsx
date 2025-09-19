import { FiExternalLink, FiImage, FiMap, FiMapPin, FiUsers } from 'react-icons/fi'
import { SectionHeader } from '../common/SectionHeader'
import './modules.css'

const statusColors: Record<string, string> = {
  disponível: 'status-available',
  reservado: 'status-reserved',
  'pré-reserva': 'status-prehold',
  'reserva permanente': 'status-permanent',
  vendido: 'status-sold',
  inativo: 'status-inactive',
  indisponível: 'status-unavailable',
}

const developments = [
  {
    name: 'Loteamento Vista Verde',
    description: 'Condomínio fechado com lazer completo e lotes a partir de 360m²',
    lots: Array.from({ length: 24 }).map((_, index) =>
      ['disponível', 'reservado', 'vendido', 'pré-reserva', 'indisponível'][index % 5]
    ),
    metrics: {
      lotCount: 120,
      leisure: 'Piscina, coworking, pet place',
      greenArea: '22.000 m² de área verde',
    },
  },
  {
    name: 'Residencial Atlântico',
    description: 'Torre premium com unidades de 120 a 180m², vista mar e serviços Pay Per Use',
    lots: Array.from({ length: 16 }).map((_, index) =>
      ['vendido', 'reserva permanente', 'disponível', 'indisponível'][index % 4]
    ),
    metrics: {
      lotCount: 84,
      leisure: 'Piscina coberta, academia Technogym, rooftop',
      greenArea: 'Jardins suspensos e praça externa',
    },
  },
]

export function PropertiesModule() {
  return (
    <section className="module" id="empreendimentos">
      <SectionHeader
        title="Empreendimentos e Lotes"
        subtitle="Visualize disponibilidade, reservas e ações rápidas em um único lugar"
        actions={<button type="button">Cadastrar novo empreendimento</button>}
      />

      <div className="module__card property-grid">
        {developments.map((development) => (
          <article key={development.name} className="property-card">
            <header>
              <div>
                <h3>{development.name}</h3>
                <p>{development.description}</p>
              </div>
              <button type="button">
                <FiExternalLink /> Abrir detalhes
              </button>
            </header>
            <div className="property-card__body">
              <div className="property-card__map">
                {development.lots.map((status, index) => (
                  <span
                    key={`${development.name}-${index}`}
                    className={statusColors[status]}
                    title={status}
                    aria-label={status}
                  >
                    {status.charAt(0).toUpperCase()}
                  </span>
                ))}
              </div>
              <div className="property-card__info">
                <span>
                  <FiMapPin /> {development.metrics.lotCount} unidades
                </span>
                <span>
                  <FiImage /> {development.metrics.leisure}
                </span>
                <span>
                  <FiMap /> {development.metrics.greenArea}
                </span>
                <div className="property-card__actions">
                  <button type="button">Cadastrar cliente</button>
                  <button type="button" className="outline">
                    Solicitar reserva
                  </button>
                  <button type="button" className="outline">
                    Criar tarefa
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
        <aside className="property-legend">
          <h4>Legenda de lotes</h4>
          <ul>
            {Object.entries(statusColors).map(([label, css]) => (
              <li key={label}>
                <span className={css} />
                {label}
              </li>
            ))}
          </ul>
          <p>
            <FiUsers /> IA sugere lotes ideais conforme perfil do lead e permite pré-reservas em 1 clique.
          </p>
        </aside>
      </div>
    </section>
  )
}
