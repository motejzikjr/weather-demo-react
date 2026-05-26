interface Props {
  total?: number
}

export function DaySummaryPrecipitation({ total }: Props) {
  return (
    <div className="DaySummary-precipitation flex flex-col gap-1">
      <span className="DaySummary-label">Srážky</span>
      <span className="DaySummary-value">
        {total !== undefined ? `${Math.round(total * 10) / 10} mm` : '—'}
      </span>
    </div>
  )
}
