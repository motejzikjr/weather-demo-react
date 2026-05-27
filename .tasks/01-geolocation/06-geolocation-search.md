# GeolocationSearch

## Cíl

Vytvoření komponenty `GeolocationSearch` v `src/module/geolocation/components/`. Komponenta propojuje `Autocomplete` (task 03), `useGeolocation` (task 04) a `geolocationStore` (task 05). Nemá vlastní props — čte stav ze store a řídí hook interně.

Volání API je odloženo o 300ms debounce, aby se API nevolalo na každý stisk klávesy.

`Autocomplete` pracuje s `value: string`. Propojení s `GeocodingSuggestion` objektem řeší `GeolocationSearch` přes `JSON.stringify` / `JSON.parse` — viz akceptační kritéria.

## Struktura souborů

```
src/module/geolocation/components/GeolocationSearch.tsx
```

## Akceptační kritéria

### Struktura
- [x] Soubor existuje na správné cestě
- [x] Arrow funkce, const export, žádné props
- [x] `npm run typecheck` hlásí 0 chyb
- [x] `npm run lint` hlásí 0 chyb

### Propojení s Autocomplete
- [x] Položky jsou mapovány ze `suggestions`: `{ name: "${s.name}, ${s.country}", value: JSON.stringify(s) }`
- [x] `onSelect` deserializuje hodnotu: `const suggestion = JSON.parse(value) as GeocodingSuggestion`
- [x] Po výběru je zavolán `setLocation(suggestion)` na store

### Debounce
- [x] `onChange` inputu spustí `search(query)` až po 300ms od posledního stisku klávesy
- [x] Pokud uživatel během 300ms dál píše, předchozí timeout se resetuje

### Zobrazení
- [x] Pod inputem je zobrazena aktuálně vybraná lokace ze store: `{location.name}, {location.country}`
- [x] Při prázdném výsledku vyhledávání zobrazí Autocomplete zprávu (výchozí `emptyMessage`)
