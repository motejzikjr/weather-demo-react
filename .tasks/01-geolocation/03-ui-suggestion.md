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
- [ ] Soubory odpovídají struktuře výše
- [ ] Komponenty jsou arrow funkce s const exportem, props interface inline
- [ ] `npm run typecheck` hlásí 0 chyb
- [ ] `npm run lint` hlásí 0 chyb

### Zobrazení
- [ ] Dropdown je skrytý pokud `value` je prázdný string
- [ ] Dropdown se zobrazí jakmile `value` není prázdný
- [ ] Pokud `items` je prázdné pole a `value` není prázdný, dropdown zobrazí `emptyMessage`
- [ ] Dropdown je absolutně pozicován vůči inputu (nezasahuje do layout flow)

### Chování — myš
- [ ] Kliknutí na položku zavolá `onSelect(item.value)` a zavře dropdown
- [ ] Hover položky ji vizuálně zvýrazní

### Chování — klávesnice
- [ ] `ArrowDown` / `ArrowUp` přesouvá zvýraznění mezi položkami
- [ ] `Enter` vybere zvýrazněnou položku (zavolá `onSelect`, zavře dropdown)
- [ ] `Escape` zavře dropdown bez výběru
- [ ] Zvýraznění se cyklí (po poslední položce jde na první a naopak)
