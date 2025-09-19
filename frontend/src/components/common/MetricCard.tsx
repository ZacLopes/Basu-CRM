import type { ReactNode } from 'react'
import './common.css'

interface MetricCardProps {
  label: string
  value: string
  helper?: string
  trend?: {
    value: string
    positive?: boolean
  }
  icon?: ReactNode
}

export function MetricCard({ label, value, helper, trend, icon }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="metric-card__icon">{icon}</div>
      <div className="metric-card__body">
        <span className="metric-card__label">{label}</span>
        <strong className="metric-card__value">{value}</strong>
        <div className="metric-card__footer">
          {trend && (
            <span
              className={`metric-card__trend ${trend.positive === false ? 'negative' : 'positive'}`}
            >
              {trend.value}
            </span>
          )}
          {helper && <span className="metric-card__helper">{helper}</span>}
        </div>
      </div>
    </div>
  )
}
