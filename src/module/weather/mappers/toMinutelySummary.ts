import { MinutelyResponse } from '../types/MinutelyResponse'
import { MinutelySummary } from '../types/MinutelySummary'

export const toMinutelySummary = (data: MinutelyResponse): MinutelySummary => {
  const { temperature_2m, precipitation, sunshine_duration, weather_code } = data?.minutely_15 ?? {}

  const temperatureMin = temperature_2m?.length
    ? Math.min(...temperature_2m)
    : undefined

  const temperatureMax = temperature_2m?.length
    ? Math.max(...temperature_2m)
    : undefined

  const totalPrecipitation = precipitation?.length
    ? precipitation.reduce((sum, v) => sum + v, 0)
    : undefined

  const totalSunshineDuration = sunshine_duration?.length
    ? sunshine_duration.reduce((sum, v) => sum + v, 0)
    : undefined

  const dominantWeatherCode = weather_code?.length
    ? weather_code.reduce((max, code) => (code > max ? code : max), 0)
    : undefined

  return {
    dominantWeatherCode,
    temperatureMin,
    temperatureMax,
    totalPrecipitation,
    totalSunshineDuration,
  }
}
