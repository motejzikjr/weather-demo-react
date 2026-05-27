import { create } from 'zustand'
import { GeocodingSuggestion } from '../types/GeocodingSuggestion'

const DEFAULT_LOCATION: GeocodingSuggestion = {
  name: 'Praha',
  country: 'Czechia',
  latitude: 50.08,
  longitude: 14.42,
}

interface GeolocationStore {
  location: GeocodingSuggestion
  setLocation: (location: GeocodingSuggestion) => void
}

export const useGeolocationStore = create<GeolocationStore>((set) => ({
  location: DEFAULT_LOCATION,
  setLocation: (location) => set({ location }),
}))
