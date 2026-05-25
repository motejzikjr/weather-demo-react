import { formatDateTime } from '~/utils/formatDateTime'

interface Props {
  time?: string
}

export function CurrentWeatherCardTime({ time }: Props) {
  if (!time) return null

  return (
    <div className="CurrentWeatherCard-text CurrentWeatherCard-time">
      <span className="CurrentWeatherCard-label">Čas:</span>
      <span className="CurrentWeatherCard-value">{formatDateTime(time)}</span>
    </div>
  )
}
