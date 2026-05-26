interface Props {
  durationSeconds?: number
}

export function DaySummarySunshine({ durationSeconds }: Props) {
  const hours = durationSeconds !== undefined
    ? Math.floor(durationSeconds / 3600)
    : undefined
  const minutes = durationSeconds !== undefined
    ? Math.floor((durationSeconds % 3600) / 60)
    : undefined

  return (
    <div className="DaySummary-sunshine flex flex-col gap-1">
      <span className="DaySummary-label">Sluneční svit</span>
      <span className="DaySummary-value">
        {hours !== undefined && minutes !== undefined
          ? `${hours} h ${minutes} min`
          : '—'}
      </span>
    </div>
  )
}
