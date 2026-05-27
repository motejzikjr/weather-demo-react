import { GeocodingResponse } from '../types/GeocodingResponse'
import { GeocodingSuggestion } from '../types/GeocodingSuggestion'

export const toGeocodingSuggestions = (data: GeocodingResponse): GeocodingSuggestion[] => {
  return (data.results ?? []).flatMap((item) => {
    if (item.name == null || item.latitude == null || item.longitude == null) return []
    return [
      {
        name: item.name,
        country: item.country,
        latitude: item.latitude,
        longitude: item.longitude,
      },
    ]
  })
}
