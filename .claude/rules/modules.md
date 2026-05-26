---
paths:
  - "src/module/**"
---

# Moduly

## Struktura modulu

```
module-name/
  components/     # Kompozitní komponenty napojené na hook (ne znovupoužitelné)
  hooks/          # Data fetching: useCallback + useEffect, stavová logika
  mappers/        # Čisté funkce: API response → doménový typ
  types/          # Rozhraní pro API response i doménové typy
  stores/         # Zustand store (pouze pokud stav sdílí více komponent)
  utils/          # Pomocné funkce specifické pro modul
```

## Typy

Všechna pole z API response jsou `optional`. Typ deklaruj pouze pro pole která jsou skutečně fetchována — odpovídá tomu co je v parametrech volání API.

## Mapper

Čistá funkce, arrow const export, transformuje API response na doménový typ:

```ts
export const toXxxData = (data: ApiResponse): DomainType[] => {
  const { field_a, field_b } = data?.section ?? {}
  return (field_a ?? []).map((value, i) => ({
    mappedField: value,
    otherField: field_b?.[i],
  }))
}
```

## Hook

```ts
export const useXxx = (param: string) => {
  const [data, setData] = useState<Type | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await api.get<ApiResponse>(...)
      setData(toXxxData(response))
    } catch (err) {
      if (err instanceof Error) setError(err)
    } finally {
      setIsLoading(false)
    }
  }, [param])

  useEffect(() => { fetchData().catch(console.error) }, [fetchData])

  return { data, isLoading, error }
}
```
