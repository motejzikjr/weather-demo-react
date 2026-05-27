# App integration

## Cíl

Zapojení `GeolocationSearch` do aplikace a aktualizace hooků tak, aby koordináty četly z `geolocationStore` místo hardcoded hodnot.

Vznikne nová `Layout` komponenta, která obalí všechny screeny a zobrazí `GeolocationSearch` nahoře na každé stránce. Hooky `useWeather` a `useDayDetail` přestanou používat hardcoded `50.08, 14.42` a budou reagovat na změnu lokace ve store.

## Upravované a nové soubory

| Soubor | Změna |
|--------|-------|
| `src/ui/Layout/Layout.tsx` | nový |
| `src/App.tsx` | obalit routes v `Layout` |
| `src/module/weather/hooks/useWeather.ts` | koordináty ze store |
| `src/module/weather/hooks/useDayDetail.ts` | koordináty ze store |

## Akceptační kritéria

### Layout
- [x] `Layout` renderuje `GeolocationSearch` nad `{children}`
- [x] `App.tsx` obaluje obsah routes v `Layout`
- [x] `GeolocationSearch` je viditelný na `WeatherScreen` i `DayDetailScreen`

### useWeather
- [x] `latitude` a `longitude` čte z `useGeolocationStore`
- [x] Při změně lokace ve store se data znovu načtou (koordináty jsou v `useCallback` deps)
- [x] Hardcoded `50.08, 14.42` odstraněno

### useDayDetail
- [x] Stejná změna jako `useWeather`
- [x] Hardcoded `50.08, 14.42` odstraněno

### Výchozí stav
- [x] Při prvním načtení aplikace se použijí koordináty Prahy z `geolocationStore` výchozí hodnoty
- [x] Počasí se načte automaticky bez nutnosti vybrat lokaci
