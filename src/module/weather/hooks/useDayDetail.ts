import { useCallback, useEffect, useState } from 'react'
import { weatherApi } from '~/module/api/openMeteoClient'
import { MinutelyResponse } from '../types/MinutelyResponse'
import { MinutelySummary } from '../types/MinutelySummary'
import { toMinutelySummary } from '../mappers/toMinutelySummary'
import { TemperatureChartPoint } from '../types/TemperatureChartPoint'
import { toTemperatureChart } from '../mappers/toTemperatureChart'

const MINUTELY_FIELDS = [
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
]

export const useDayDetail = (date: string) => {
  const [data, setData] = useState<MinutelyResponse | null>(null)
  const [summary, setSummary] = useState<MinutelySummary | null>(null)
  const [temperatureChart, setTemperatureChart] = useState<TemperatureChartPoint[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const getDayDetail = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await weatherApi.get<MinutelyResponse>('forecast', {
        latitude: 50.08,
        longitude: 14.42,
        minutely_15: MINUTELY_FIELDS,
        start_minutely_15: `${date}T00:00`,
        end_minutely_15: `${date}T23:45`,
        timezone: 'Europe/Berlin',
      })

      setData(response)
      setSummary(toMinutelySummary(response))
      setTemperatureChart(toTemperatureChart(response))
    } catch (err) {
      if (err instanceof Error) {
        setError(err)
      }
    } finally {
      setIsLoading(false)
    }
  }, [date])

  useEffect(() => {
    getDayDetail().catch(console.error)
  }, [getDayDetail])

  return { data, summary, temperatureChart, isLoading, error }
}
