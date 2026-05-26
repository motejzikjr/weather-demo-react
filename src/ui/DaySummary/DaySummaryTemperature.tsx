interface Props {
  min?: number
  max?: number
}

export function DaySummaryTemperature({ min, max }: Props) {
  return (
    <div className="DaySummary-temperature flex flex-col gap-1">
      <span className="DaySummary-label">Teplota</span>
      <span className="DaySummary-value">
        {min !== undefined ? Math.round(min) : '—'}° / {max !== undefined ? Math.round(max) : '—'}°C
      </span>
    </div>
  )
}
