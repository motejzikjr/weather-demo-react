---
paths:
  - ".tasks/**"
---

# Task soubory

## Formát task souboru

Každý subtask má tyto sekce:

```markdown
# Název tasku

## Cíl
Co má vzniknout a proč. Jedna až tři věty, žádný postup.
Architektická rozhodnutí patří sem, ne do akceptačních kritérií.

## Struktura souborů        ← volitelné
Nové nebo upravované soubory s krátkým popisem.

## Typy / Props / Vzor      ← volitelné
Konkrétní rozhraní nebo kódové vzory pokud jsou součástí zadání.

## Akceptační kritéria
Checkboxy rozdělené do skupin. Každé kritérium je ověřitelné —
buď pohledem do kódu (struktura, konvence) nebo spuštěním (chování).
```

## Formát overview souboru

```markdown
# Název feature

## Cíl
Stručný popis celé feature.

## Subtasky
- [název](./soubor.md)
```

## Konvence

- Název souboru: `<číslo>-<název>.md` (např. `02-ui-input.md`)
- Číslo určuje pořadí implementace — subtasky jsou na sobě závislé
- `## Cíl` popisuje *co*, ne *jak* — implementaci řeší Claude podle pravidel projektu
- Akceptační kritéria používají `- [ ]` checkboxy
- Kódové ukázky v zadání jsou orientační, ne závazné — Claude dodržuje konvence projektu
