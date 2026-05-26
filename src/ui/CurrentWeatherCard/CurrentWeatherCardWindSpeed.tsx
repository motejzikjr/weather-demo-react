interface Props {
  windSpeed?: number
}

export const CurrentWeatherCardWindSpeed = ({ windSpeed }: Props) => {
  return (
    <div className="CurrentWeatherCard-text CurrentWeatherCard-windSpeed">
      <span className="CurrentWeatherCard-label">Rychlost větru:</span>
      <span className="CurrentWeatherCard-value">{windSpeed} km/h</span>
    </div>
  )
}
