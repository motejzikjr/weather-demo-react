import { useEffect, useRef, useState } from 'react'
import { Autocomplete } from '~/ui/Autocomplete/Autocomplete'
import { useGeolocation } from '../hooks/useGeolocation'
import { useGeolocationStore } from '../stores/geolocationStore'
import { GeocodingSuggestion } from '../types/GeocodingSuggestion'

export const GeolocationSearch = () => {
  const [inputValue, setInputValue] = useState('')
  const { suggestions, search } = useGeolocation()
  const { location, setLocation } = useGeolocationStore()
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = (value: string) => {
    setInputValue(value)

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      if (value) search(value).catch(console.error)
    }, 300)
  }

  const handleSelect = (value: string) => {
    const suggestion = JSON.parse(value) as GeocodingSuggestion
    setLocation(suggestion)
    setInputValue('')
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  const items = suggestions.map((s) => ({
    name: `${s.name}, ${s.country}`,
    value: JSON.stringify(s),
  }))

  return (
    <div>
      <Autocomplete
        value={inputValue}
        onChange={handleChange}
        onSelect={handleSelect}
        items={items}
        placeholder="Hledat místo..."
      />
      <div>
        {location.name}, {location.country}
      </div>
    </div>
  )
}
