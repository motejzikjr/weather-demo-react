import { useCallback, useState } from 'react'
import { geocodingApi } from '../../api/openMeteoClient'
import { toGeocodingSuggestions } from '../mappers/toGeocodingSuggestions'
import { GeocodingResponse } from '../types/GeocodingResponse'
import { GeocodingSuggestion } from '../types/GeocodingSuggestion'

export const useGeolocation = () => {
  const [suggestions, setSuggestions] = useState<GeocodingSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const search = useCallback(async (query: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await geocodingApi.get<GeocodingResponse>('search', {
        name: query,
        count: 10,
        language: 'en',
        format: 'json',
      })
      setSuggestions(toGeocodingSuggestions(data))
    } catch (err) {
      if (err instanceof Error) setError(err)
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { suggestions, isLoading, error, search }
}
