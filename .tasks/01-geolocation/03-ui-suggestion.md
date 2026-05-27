# UI Autocomplete

## Cíl

Vytvoření UI komponenty `Autocomplete` v `src/ui/Autocomplete/`. Komponenta je controlled — hodnotu inputu a seznam položek dostává přes props. Skládá se z textového inputu (`InputText`) a absolutně pozicovaného dropdownu se seznamem položek. Podporuje výběr myší i klávesnicí.

Každá položka má `name` (zobrazený text) a `value` (propagováno po výběru přes `onSelect`).

## Props

```ts
interface AutocompleteProps {
  value: string
  onChange: (value: string) => void
  onSelect: (value: string) => void
  items: { name: string; value: string }[]
  placeholder?: string
  emptyMessage?: string  // default: "Žádné výsledky"
}
```

## Struktura souborů

```
src/ui/Autocomplete/
  Autocomplete.tsx       # Hlavní komponenta, logika klávesnice, stav zvýraznění
  Autocomplete.scss
  AutocompleteList.tsx   # Dropdown obal, absolutní pozicování
  AutocompleteItem.tsx   # Jedna položka seznamu
```

## Akceptační kritéria

### Struktura
- [x] Soubory odpovídají struktuře výše
- [x] Komponenty jsou arrow funkce s const exportem, props interface inline
- [x] `npm run typecheck` hlásí 0 chyb
- [x] `npm run lint` hlásí 0 chyb

### Zobrazení
- [x] Dropdown je skrytý pokud `value` je prázdný string
- [x] Dropdown se zobrazí jakmile `value` není prázdný
- [x] Pokud `items` je prázdné pole a `value` není prázdný, dropdown zobrazí `emptyMessage`
- [x] Dropdown je absolutně pozicován vůči inputu (nezasahuje do layout flow)

### Chování — myš
- [x] Kliknutí na položku zavolá `onSelect(item.value)` a zavře dropdown
- [x] Hover položky ji vizuálně zvýrazní

### Chování — klávesnice
- [x] `ArrowDown` / `ArrowUp` přesouvá zvýraznění mezi položkami
- [x] `Enter` vybere zvýrazněnou položku (zavolá `onSelect`, zavře dropdown)
- [x] `Escape` zavře dropdown bez výběru
- [x] Zvýraznění se cyklí (po poslední položce jde na první a naopak)
