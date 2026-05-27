# Module geolocation

## Cíl

Vytvoření modulu `src/module/geolocation/` s logikou pro vyhledávání míst přes Open-Meteo Geocoding API. Modul využívá existující `geocodingApi` wrapper z `src/module/api/openMeteoClient.ts`.

Endpoint: `GET /search?name=<query>&count=10&language=en&format=json`  
Dokumentace: https://open-meteo.com/en/docs/geocoding-api

Z response se využívá pouze: `name`, `latitude`, `longitude`, `country`.

Hook exportuje funkci `search(query)` — volání řídí rodičovská komponenta (včetně případného debounce). Vzor se liší od `useWeather`/`useDayDetail` které jsou reaktivní — pro search je imperativní přístup přirozenější.

> **Poznámka pro task 05:** `GeocodingSuggestion` je doménový objekt. Napojení na `Autocomplete` (který má aktuálně `value: string`) bude vyřešeno při integraci — buď generickým typem nebo mapováním v rodiči.

## Struktura souborů

```
src/module/geolocation/
  hooks/useGeolocation.ts
  mappers/toGeocodingSuggestions.ts
  types/GeocodingResponse.ts
  types/GeocodingSuggestion.ts
```

## Typy

```ts
// GeocodingResponse — tvar API response
interface GeocodingResponse {
  results?: {
    name?: string
    latitude?: number
    longitude?: number
    country?: string
  }[]
}

// GeocodingSuggestion — doménový typ
interface GeocodingSuggestion {
  name: string
  country?: string
  latitude: number
  longitude: number
}
```

## Akceptační kritéria

### Struktura
- [ ] Soubory odpovídají struktuře výše
- [ ] Dodrženy konvence modulu (arrow funkce, const export, optional fields v response typu)
- [ ] `npm run typecheck` hlásí 0 chyb
- [ ] `npm run lint` hlásí 0 chyb

### Hook `useGeolocation`
- [ ] Exportuje `{ suggestions, isLoading, error, search }`
- [ ] `search(query: string)` volá API a aktualizuje `suggestions`
- [ ] Při chybě nastaví `error`, `suggestions` zůstane prázdné pole
- [ ] Při novém volání `search` resetuje předchozí `error`

### Mapper `toGeocodingSuggestions`
- [ ] Čistá funkce `(data: GeocodingResponse) => GeocodingSuggestion[]`
- [ ] Položky kde chybí `name`, `latitude` nebo `longitude` jsou vynechány
