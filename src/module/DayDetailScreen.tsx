import { useParams } from 'react-router'
import { useDayDetail } from './weather/hooks/useDayDetail'
import { DaySummary } from '~/ui/DaySummary/DaySummary'
import { formatDate } from '~/utils/formatDate'
import { Floor } from '~/ui/Floor/Floor'
import { FloorVariant } from '~/ui/Floor/FloorVariant'

export function DayDetailScreen() {
  const { date } = useParams<{ date: string }>()
  const { data, summary, isLoading, error } = useDayDetail(date ?? '')

  if (isLoading) return <p className="p-4">Načítám detail dne…</p>
  if (error) return <div className="p-4 text-red-600">Chyba: {error.message}</div>

  return (
    <>
      <Floor variant={FloorVariant.SECONDARY}>
        <h1 className="text-xl font-bold capitalize">{date ? formatDate(date) : '—'}</h1>
        {summary && <DaySummary summary={summary} />}
      </Floor>

      <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}
