# UI input

## Cíl

Vytvoření UI komponenty `InputText` v `src/ui/InputText/`. Komponenta obaluje nativní `<input>` element a rozšiřuje jeho props přes `ComponentPropsWithoutRef<'input'>` — stejný vzor jako `Button` s `ComponentPropsWithoutRef<'button'>`. Nevypisuje konkrétní atributy, přijímá vše co nativní input podporuje.

## Akceptační kritéria

### Struktura
- [x] Soubory: `src/ui/InputText/InputText.tsx` + `src/ui/InputText/InputText.scss`
- [x] Props interface rozšiřuje `ComponentPropsWithoutRef<'input'>`, je definován inline v souboru komponenty
- [x] Komponenta je arrow funkce s const exportem
- [x] `npm run typecheck` hlásí 0 chyb
- [x] `npm run lint` hlásí 0 chyb

### Chování
- [x] Renderuje nativní `<input>` element
- [x] Všechny předané props jsou spreadnuty na `<input>` (`...props`)
- [x] `placeholder`, `type`, `onChange`, `value`, `disabled` fungují bez dodatečné konfigurace
