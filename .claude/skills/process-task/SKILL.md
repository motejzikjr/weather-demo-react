---
description: Zpracuje task soubor — implementuje feature podle akceptačních kritérií, spustí typecheck a odškrtne splněná kritéria. Použij když uživatel chce implementovat konkrétní task.
argument-hint: <cesta k task souboru>
disable-model-invocation: true
---

# Process task: $ARGUMENTS

## Obsah tasku

!`cat $ARGUMENTS`

## Existující soubory v relevantních adresářích

!`find src/ui src/module -type f | sort`

## Instrukce

Postupuj v tomto pořadí:

### 1. Pochop zadání
Přečti `## Cíl` a `## Akceptační kritéria`. Pokud zadání odkazuje na jiné tasky jako závislosti, ověř že existují (`find src/`).

### 2. Implementuj
Implementuj feature podle akceptačních kritérií. Dodržuj konvence projektu z pravidel (arrow funkce, inline props, BEM naming, atd.).

### 3. Zkontroluj TypeScript
Spusť `npm run typecheck`. Oprav všechny chyby před pokračováním.

### 4. Odškrtni kritéria
V task souboru nahraď `- [ ]` za `- [x]` u každého splněného kritéria.

### 5. Shrnutí
Stručně reportuj: co vzniklo, které soubory byly vytvořeny nebo upraveny, zda typecheck prošel.
