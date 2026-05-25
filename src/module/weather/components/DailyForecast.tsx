import { useNavigate } from 'react-router'
import type { DailyForecast as DailyForecastType } from '../types/DailyForecast'
import { DailyWeatherCard } from '~/ui/DailyWeatherCard/DailyWeatherCard'

interface Props {
  forecast: DailyForecastType[]
}

export const DailyForecast = ({ forecast }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-2">
      {forecast.map((day) => (
        <DailyWeatherCard
          key={day.date}
          day={day}
          onDetail={() => navigate(`/weather/day/${day.date}`)}
        />
      ))}
    </div>
  )
}
