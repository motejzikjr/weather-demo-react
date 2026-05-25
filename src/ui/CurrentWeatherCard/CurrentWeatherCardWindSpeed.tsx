interface Props {
  windSpeed?: number
}

export function CurrentWeatherCardWindSpeed({ windSpeed }: Props) {
  return (
    <div className="CurrentWeatherCard-text CurrentWeatherCard-windSpeed">
      <span className="CurrentWeatherCard-label">Rychlost větru:</span>
      <span className="CurrentWeatherCard-value">{windSpeed} km/h</span>
    </div>
  )
}
