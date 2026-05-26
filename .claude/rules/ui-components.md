---
paths:
  - "src/ui/**"
---

# UI komponenty

Komponenty v `src/ui/` jsou izolované, znovupoužitelné a routing-agnostic.

## Struktura adresáře

```
ComponentName/
  ComponentName.tsx          # Hlavní komponenta — skládá sub-komponenty
  ComponentName.scss         # Styly (pokud potřeba)
  ComponentNameLabel.tsx     # Sub-komponenta — jeden logický HTML uzel
  ComponentNameButton.tsx    # Sub-komponenta — jeden logický HTML uzel
```

## Sub-komponenty

Každý logický celek (řádek, tlačítko, ikona, hodnota) extrahuj do vlastní sub-komponenty. Hlavní komponenta pak jen skládá sub-komponenty dohromady a předává jim props — neobsahuje žádnou vlastní HTML logiku.

Vzor podle `src/ui/CurrentWeatherCard/`:
- `CurrentWeatherCard.tsx` — pouze skládá Temperature, WindSpeed, Time, Button
- `CurrentWeatherCardTemperature.tsx` — jeden `<div>` s labelem a hodnotou
- `CurrentWeatherCardButton.tsx` — jedno tlačítko

Výsledkem jsou malé, dobře čitelné soubory — každý řeší jednu věc.

## Definice komponenty

```tsx
interface ComponentNameProps {
  value: string
  onAction: () => void
}

export const ComponentName = ({ value, onAction }: ComponentNameProps) => {
  return <div className="ComponentName">{value}</div>
}
```

- Arrow funkce, const export
- Props interface inline ve stejném souboru
- Nikdy `useNavigate` — přijmi `onClick` / `onAction` callback z rodiče

## CSS pojmenování (BEM-like)

```scss
.ComponentName {}           // root
.ComponentName-element {}   // potomek
.ComponentName--modifier {} // varianta
```

## SCSS

```scss
@use '~/styles/settings/colors' as *;   // $color-primary, atd.
@use '~/styles/settings/spacing' as *;  // spacing-* mixiny
```

Tailwind pro layout (flex, grid, gap, padding). SCSS pro vizuální styly (barva, font, border, shadow).
