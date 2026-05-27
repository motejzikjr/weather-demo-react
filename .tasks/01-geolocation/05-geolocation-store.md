# Geolocation store

## Cíl

Vytvoření Zustand store `geolocationStore` v `src/module/geolocation/stores/geolocationStore.ts`. Store uchovává vybranou lokaci a slouží jako jediný zdroj koordinátů pro všechny hooky v aplikaci. Výchozí hodnotou je Praha.

Store využívá typ `GeocodingSuggestion` z tasku 04.

## Struktura souborů

```
src/module/geolocation/stores/geolocationStore.ts
```

## Vzor

Stejný vzor jako `src/module/weather/stores/weatherStore.ts`:

```ts
export const useGeolocationStore = create<GeolocationStore>((set) => ({
  location: DEFAULT_LOCATION,
  setLocation: (location) => set({ location }),
}))
```

Výchozí lokace:
```ts
const DEFAULT_LOCATION: GeocodingSuggestion = {
  name: 'Praha',
  country: 'Czechia',
  latitude: 50.08,
  longitude: 14.42,
}
```

## Akceptační kritéria

### Struktura
- [ ] Soubor existuje na správné cestě
- [ ] Dodržen vzor z `weatherStore.ts` (arrow funkce, const export)
- [ ] `npm run typecheck` hlásí 0 chyb
- [ ] `npm run lint` hlásí 0 chyb

### Chování
- [ ] Výchozí stav obsahuje Praha s koordináty `50.08, 14.42`
- [ ] `setLocation(suggestion)` nahradí celou lokaci novými daty
