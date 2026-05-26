---
description: Přidá novou vizualizaci (graf nebo karty) do libovolného screenu. Použij když uživatel chce přidat nový graf, chart nebo datovou sekci do existující nebo nové stránky.
argument-hint: <název vizualizace> <typ: line|bar|area|cards>
---

# New visualization: $ARGUMENTS

## Existující screeny

!`find src/module -name "*Screen.tsx" | sort`

## Existující hooky

!`find src/module -name "use*.ts" | sort`

## Instrukce

Zjisti od uživatele (nebo odvoď z kontextu): do kterého screenu vizualizace patří a který hook ji bude poskytovat. Pak postupuj v tomto pořadí:

### 1. Type (`src/module/<modul>/types/`)

Vytvoř typ pro jeden datový bod. Pole `time` je povinné, ostatní optional.

### 2. Mapper (`src/module/<modul>/mappers/`)

Čistá funkce dle vzoru v pravidlech modulu. Extrahuj pouze pole která jsou skutečně fetchována.

### 3. Hook

Rozšíř existující hook cílového screenu: nový state, volání mapperu v try bloku, přidání do return. Pokud hook ještě neexistuje, vytvoř ho dle vzoru v pravidlech modulu.

### 4. UI komponenta (`src/ui/<Název>/`)

- `ResponsiveContainer width="100%"`, výška 200–300px dle hustoty dat
- `XAxis dataKey="time" interval={11}` pro 15min data (label každé 3h)
- Barvy konzistentní s existujícími grafy: červená `#ef4444`, modrá `#3b82f6`, fialová `#a78bfa`, oranžová `#f97316`
- Line grafy: noční úsek podkreslit přes `ReferenceArea` (viz `TemperatureChart.tsx`)
- Tooltip `formatter` s jednotkami

### 5. Screen

Přidej do cílového screenu uvnitř `<Floor variant={FloorVariant.PRIMARY}>` s nadpisem `<h2>`.

### Finální kontrola

Spusť `npm run typecheck` a oprav případné chyby.
