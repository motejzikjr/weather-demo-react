import { CurrentWeather } from './weather/components/CurrentWeather'
import { DailyForecast } from './weather/components/DailyForecast'
import { Charts } from './weather/components/Charts'
import { useWeather } from './weather/hooks/useWeather'
import { Floor } from '~/ui/Floor/Floor'
import { FloorVariant } from '~/ui/Floor/FloorVariant'

export const WeatherScreen = () => {
  const { weather, isLoading, error, refresh } = useWeather()

  if (isLoading) return <p className="p-4">Načítám počasí…</p>
  if (error) return <div className="p-4 text-red-600">Chyba: {error.message}</div>
  if (!weather) return null

  return (
    <>
      <Floor variant={FloorVariant.SECONDARY}>
        <CurrentWeather current={weather.current} onRefresh={refresh} />
      </Floor>
      <Floor variant={FloorVariant.SECONDARY}>
        <DailyForecast forecast={weather.forecast} />
      </Floor>
      <Floor variant={FloorVariant.PRIMARY}>
        <Charts forecast={weather.forecast} />
      </Floor>
    </>
  )
}
