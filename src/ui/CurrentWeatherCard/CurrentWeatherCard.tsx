import type { CurrentWeather } from '~/module/weather/types/CurrentWeather'
import './CurrentWeatherCard.scss'
import { CurrentWeatherCardTemperature } from './CurrentWeatherCardTemperature'
import { CurrentWeatherCardWindSpeed } from './CurrentWeatherCardWindSpeed'
import { CurrentWeatherCardTime } from './CurrentWeatherCardTime'
import { CurrentWeatherCardButton } from './CurrentWeatherCardButton'

interface CurrentWeatherCardProps {
  current: CurrentWeather
  onRefresh: () => void
}

export function CurrentWeatherCard({ current, onRefresh }: CurrentWeatherCardProps) {
  return (
    <div className="CurrentWeatherCard flex flex-col gap-4 p-4 border-2 border-amber-600 rounded-lg w-max">
      <div className="flex flex-col gap-1">
        <CurrentWeatherCardTemperature temperature={current.temperature} />
        <CurrentWeatherCardWindSpeed windSpeed={current.windSpeed} />
        <CurrentWeatherCardTime time={current.time} />
      </div>
      <CurrentWeatherCardButton onRefresh={onRefresh} />
    </div>
  )
}
