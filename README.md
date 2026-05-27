# Weather Demo React

React aplikace zobrazující aktuální počasí a předpověď pomocí [Open-Meteo API](https://open-meteo.com/). Podporuje vyhledávání míst s našeptávačem napojením na Open-Meteo Geocoding API.

**Live demo:** https://motejzikjr.github.io/weather-demo-react/#/weather

## Funkce

- Aktuální počasí a 7denní předpověď
- Vyhledávání míst s našeptávačem (geokódování)
- Detail dne s grafy teploty a srážek v 15minutovém rozlišení

## Tech stack

- React 19, React Router 7, Zustand 5
- Vite 6, TypeScript 5 (strict)
- Tailwind CSS 4, Sass
- Recharts 3

## Prerekvizity

- Node.js >= 22 (viz `.nvmrc`)

## Spuštění

```bash
npm install
npm run dev
```

Aplikace běží na `http://localhost:5173`.

## Skripty

| Příkaz | Popis |
|---|---|
| `npm run dev` | Spustí dev server |
| `npm run build` | Typová kontrola a build pro produkci |
| `npm run typecheck` | TypeScript kontrola bez emitu |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint s automatickými opravami |
| `npm run format` | Prettier |

## Struktura projektu

```
src/
  App.tsx                          # Routes (HashRouter): /weather, /weather/day/:date
  Layout.tsx                       # App shell s vyhledáváním míst
  module/
    geolocation/                   # Feature vyhledávání míst
      components/GeolocationSearch.tsx
      hooks/useGeolocation.ts
      mappers/toGeocodingSuggestions.ts
      stores/geolocationStore.ts
      types/
    weather/                       # Feature dat počasí
      components/
      hooks/useWeather.ts, useDayDetail.ts
      mappers/
      stores/weatherStore.ts
      types/
    api/openMeteoClient.ts         # Fetch wrapper pro Open-Meteo API
  ui/                              # Izolované znovupoužitelné UI komponenty
  styles/settings/                 # SCSS proměnné (barvy, spacing)
  utils/                           # formatDate, formatDateTime
```

## AI-asistovaný vývoj

Modul `geolocation` byl implementován pomocí [Claude Code](https://claude.ai/code) na základě strukturovaných task souborů s definovanými akceptačními kritérii. Každý subtask popisoval cíl, strukturu souborů a ověřitelná kritéria — Claude implementoval kód, spouštěl typovou kontrolu a lint, a odškrtával splněná kritéria.

Tento přístup odděluje **návrh architektury** (task definice, konvence projektu) od **implementace** a umožňuje iterativní vývoj s jasně ověřitelným výstupem.

## API

Data jsou načítána z [Open-Meteo](https://open-meteo.com/) — bez nutnosti API klíče.

- **Forecast API** (`api.open-meteo.com/v1/forecast`) — denní a 15minutová data počasí
- **Geocoding API** (`geocoding-api.open-meteo.com/v1/search`) — vyhledávání míst
