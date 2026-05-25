import { useNavigate } from 'react-router'
import type { DailyForecast as DailyForecastType } from '../types/DailyForecast'
import { DailyWeatherCard } from '~/ui/DailyWeatherCard/DailyWeatherCard'

interface Props {
  forecast: DailyForecastType[]
}

export const DailyForecast = ({ forecast }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="flex gap-4 flex-wrap p-2">
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
