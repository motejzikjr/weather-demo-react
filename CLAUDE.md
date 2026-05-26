# weather-demo-react

React demo app vizualizující počasí přes Open-Meteo API.

## Stack

- React 19 + React Router 7 + Zustand 5
- Vite 6, TypeScript 5.8.3 strict mode
- Tailwind CSS 4 (`@theme` v `src/styles/global.css`) + Sass
- Recharts 3, react-icons/md
- `~` alias → `src/`

## Příkazy

```bash
npm run dev        # dev server
npm run build      # tsc + vite build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run lint:fix   # eslint --fix
npm run format     # prettier --write src/
```

## Struktura

```
src/
  App.tsx                       # Routes: /weather, /weather/day/:date (HashRouter)
  module/
    WeatherScreen.tsx           # Hlavní stránka
    DayDetailScreen.tsx         # Detail dne (grafy)
    api/openMeteoClient.ts      # fetch wrapper pro Open-Meteo
    weather/
      components/               # Kompozitní komponenty stránky
      hooks/                    # useWeather, useDayDetail
      mappers/                  # API response → domain typ
      stores/weatherStore.ts    # Zustand store
      types/                    # Rozhraní pro API i doménové typy
      utils/weatherCodeToIcon.tsx
  ui/                           # Izolované znovupoužitelné UI komponenty
  styles/settings/              # SCSS mixiny (colors, spacing)
  utils/                        # formatDate, formatDateTime
```

## API

Open-Meteo `/v1/forecast`, Praha: `latitude: 50.08, longitude: 14.42`, `timezone: Europe/Berlin`.

- `useWeather` — denní + aktuální data (`daily`, `current`)
- `useDayDetail` — 15minutová data pro konkrétní den (`minutely_15`, `start_minutely_15` / `end_minutely_15`)

## Konvence

- **Arrow funkce vždy**: `export const Foo = () => {}` — nikdy `function Foo()`
- **Props interface inline**: definuj přímo v souboru komponenty, ne v samostatném souboru
- **Žádné default exporty** kromě `App.tsx`
- **Žádné komentáře** pokud WHY není zřejmé z kódu
- UI komponenty jsou **routing-agnostic**: přijímají callbacky, nikdy nevolají `useNavigate` uvnitř `src/ui/`
- Tailwind pro layout a spacing, SCSS pro vizuální styly specifické pro komponentu
- SCSS proměnné importovat přes `@use '~/styles/settings/...' as *`
