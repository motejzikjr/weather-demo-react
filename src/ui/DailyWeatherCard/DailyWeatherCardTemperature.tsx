interface Props {
  temperatureFrom?: number
  temperatureTo?: number
}

export const DailyWeatherCardTemperature = ({ temperatureFrom, temperatureTo }: Props) => {
  return (
    <div className="DailyWeatherCard-temperature flex gap-2 text-sm">
      <span>Min: {temperatureFrom}°C</span>
      <span>Max: {temperatureTo}°C</span>
    </div>
  )
}
