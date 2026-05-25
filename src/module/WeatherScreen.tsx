import { CurrentWeather } from './weather/components/CurrentWeather'
import { DailyForecast } from './weather/components/DailyForecast'
import { Charts } from './weather/components/Charts'
import { useWeather } from './weather/hooks/useWeather'

export function WeatherScreen() {
  const { weather, isLoading, error, refresh } = useWeather()

  if (isLoading) return <p className="p-4">Načítám počasí…</p>
  if (error) return <div className="p-4 text-red-600">Chyba: {error.message}</div>
  if (!weather) return null

  return (
    <div className="container mx-auto px-4 py-6">
      <CurrentWeather current={weather.current} onRefresh={refresh} />
      <DailyForecast forecast={weather.forecast} />
      <Charts forecast={weather.forecast} />
    </div>
  )
}
