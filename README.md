# Weather Demo React

React app displaying current weather and forecasts using the [Open-Meteo API](https://open-meteo.com/). Supports location search with autocomplete powered by the Open-Meteo Geocoding API.

**Live demo:** https://motejzikjr.github.io/weather-demo-react/#/weather

## Features

- Current weather conditions and 7-day forecast
- Location search with autocomplete (geocoding)
- Day detail view with 15-minute resolution temperature and precipitation charts

## Tech stack

- React 19, React Router 7, Zustand 5
- Vite 6, TypeScript 5 (strict)
- Tailwind CSS 4, Sass
- Recharts 3

## Prerequisites

- Node.js >= 22 (see `.nvmrc`)

## Getting started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run typecheck` | TypeScript check without emit |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint with auto-fix |
| `npm run format` | Prettier |

## Project structure

```
src/
  App.tsx                          # Routes (HashRouter): /weather, /weather/day/:date
  Layout.tsx                       # App shell with location search
  module/
    geolocation/                   # Location search feature
      components/GeolocationSearch.tsx
      hooks/useGeolocation.ts
      mappers/toGeocodingSuggestions.ts
      stores/geolocationStore.ts
      types/
    weather/                       # Weather data feature
      components/
      hooks/useWeather.ts, useDayDetail.ts
      mappers/
      stores/weatherStore.ts
      types/
    api/openMeteoClient.ts         # Fetch wrapper for Open-Meteo APIs
  ui/                              # Isolated, reusable UI components
  styles/settings/                 # SCSS variables (colors, spacing)
  utils/                           # formatDate, formatDateTime
```

## API

Data is fetched from [Open-Meteo](https://open-meteo.com/) — no API key required.

- **Forecast API** (`api.open-meteo.com/v1/forecast`) — daily and 15-minute weather data
- **Geocoding API** (`geocoding-api.open-meteo.com/v1/search`) — location search
