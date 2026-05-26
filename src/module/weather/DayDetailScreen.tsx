import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { weatherApi } from '~/module/api/openMeteoClient'

const params = {
  latitude: 52.52,
  longitude: 13.41,
  minutely_15: [
    'temperature_2m',
    'relative_humidity_2m',
    'dew_point_2m',
    'apparent_temperature',
    'precipitation',
    'rain',
    'snowfall',
    'snowfall_height',
    'freezing_level_height',
    'sunshine_duration',
    'weather_code',
    'wind_speed_10m',
    'wind_speed_80m',
    'wind_direction_10m',
    'wind_direction_80m',
    'wind_gusts_10m',
    'visibility',
    'is_day',
  ],
  timezone: 'Europe/Berlin',
  forecast_days: 1,
}

export function DayDetailScreen() {
  const { date } = useParams<{ date: string }>()
  const [data, setData] = useState<unknown>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    weatherApi
      .get('forecast', params)
      .then(setData)
      .catch((err) => setError(err instanceof Error ? err : new Error(String(err))))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <p className="p-4">Načítám detail dne…</p>
  if (error) return <div className="p-4 text-red-600">Chyba: {error.message}</div>

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Detail dne: {date}</h1>
      <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
