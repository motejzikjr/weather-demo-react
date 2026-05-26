import { useParams } from 'react-router'
import { useDayDetail } from './weather/hooks/useDayDetail'

export function DayDetailScreen() {
  const { date } = useParams<{ date: string }>()
  const { data, isLoading, error } = useDayDetail(date ?? '')

  if (isLoading) return <p className="p-4">Načítám detail dne…</p>
  if (error) return <div className="p-4 text-red-600">Chyba: {error.message}</div>

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Detail dne: {date}</h1>
      <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
