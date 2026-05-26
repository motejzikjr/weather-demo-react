interface Props {
  temperature?: number
}

export const CurrentWeatherCardTemperature = ({ temperature }: Props) => {
  return (
    <div className="CurrentWeatherCard-text CurrentWeatherCard-temperature">
      <span className="CurrentWeatherCard-label">Aktuální teplota:</span>
      <span className="CurrentWeatherCard-value">{temperature} °C</span>
    </div>
  )
}
