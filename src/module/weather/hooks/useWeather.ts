import { weatherApi } from '../../api/openMeteoClient'
import { useCallback, useEffect, useState } from 'react'
import { toCurrentWeather } from '../mappers/toCurrentWeather'
import { toDailyForecast } from '../mappers/toDailyForecast'
import { WeatherResponse } from '../types/WeatherResponse'
import { CurrentWeather } from '../types/CurrentWeather'
import { DailyForecast } from '../types/DailyForecast'
import { useWeatherStore } from '../stores/weatherStore'
import { useGeolocationStore } from '~/module/geolocation/stores/geolocationStore'

interface WeatherData {
  current: CurrentWeather
  forecast: DailyForecast[]
}

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const { updateCurrentTemperature } = useWeatherStore()
  const { location } = useGeolocationStore()

  const getWeather = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await weatherApi.get<WeatherResponse>('forecast', {
        latitude: location.latitude,
        longitude: location.longitude,
        current: 'temperature_2m,windspeed_10m',
        daily: 'weathercode,temperature_2m_max,temperature_2m_min',
        forecast_days: 7,
        timezone: 'Europe/Berlin',
      })

      const current = toCurrentWeather(data)
      const forecast = toDailyForecast(data)

      setWeather({
        current,
        forecast,
      })

      updateCurrentTemperature(current?.temperature ?? 0)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }, [updateCurrentTemperature, location.latitude, location.longitude])

  useEffect(() => {
    getWeather().catch(console.error)
  }, [getWeather])

  return {
    weather,
    isLoading,
    error,
    getWeather,
    refresh: getWeather,
  }
}
