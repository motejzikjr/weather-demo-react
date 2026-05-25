import type { DailyForecast } from '~/module/weather/types/DailyForecast'
import './DailyWeatherCard.scss'
import { DailyWeatherCardDate } from './DailyWeatherCardDate'
import { DailyWeatherCardIcon } from './DailyWeatherCardIcon'
import { DailyWeatherCardTemperature } from './DailyWeatherCardTemperature'
import { DailyWeatherCardButton } from './DailyWeatherCardButton'

interface DailyWeatherCardProps {
  day: DailyForecast
  onDetail: () => void
}

export function DailyWeatherCard({ day, onDetail }: DailyWeatherCardProps) {
  return (
    <div className="DailyWeatherCard flex flex-col gap-3 p-4 bg-white rounded-xl shadow min-w-40">
      <DailyWeatherCardDate date={day.date} />
      <DailyWeatherCardIcon code={day.code} />
      <DailyWeatherCardTemperature
        temperatureFrom={day.temperatureFrom}
        temperatureTo={day.temperatureTo}
      />
      <DailyWeatherCardButton onDetail={onDetail} />
    </div>
  )
}
