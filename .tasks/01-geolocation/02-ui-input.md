# UI input

## Cíl

Vytvoření UI komponenty `InputText` v `src/ui/InputText/`. Komponenta obaluje nativní `<input>` element a rozšiřuje jeho props přes `ComponentPropsWithoutRef<'input'>` — stejný vzor jako `Button` s `ComponentPropsWithoutRef<'button'>`. Nevypisuje konkrétní atributy, přijímá vše co nativní input podporuje.

## Akceptační kritéria

### Struktura
- [ ] Soubory: `src/ui/InputText/InputText.tsx` + `src/ui/InputText/InputText.scss`
- [ ] Props interface rozšiřuje `ComponentPropsWithoutRef<'input'>`, je definován inline v souboru komponenty
- [ ] Komponenta je arrow funkce s const exportem
- [ ] `npm run typecheck` hlásí 0 chyb

### Chování
- [ ] Renderuje nativní `<input>` element
- [ ] Všechny předané props jsou spreadnuty na `<input>` (`...props`)
- [ ] `placeholder`, `type`, `onChange`, `value`, `disabled` fungují bez dodatečné konfigurace
