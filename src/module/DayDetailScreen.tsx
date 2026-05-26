import { useParams } from 'react-router'
import { useDayDetail } from './weather/hooks/useDayDetail'
import { DaySummary } from '~/ui/DaySummary/DaySummary'
import { TemperatureChart } from '~/ui/TemperatureChart/TemperatureChart'
import { PrecipitationChart } from '~/ui/PrecipitationChart/PrecipitationChart'
import { formatDate } from '~/utils/formatDate'
import { Floor } from '~/ui/Floor/Floor'
import { FloorVariant } from '~/ui/Floor/FloorVariant'

export const DayDetailScreen = () => {
  const { date } = useParams<{ date: string }>()
  const { data, summary, temperatureChart, precipitationChart, isLoading, error } = useDayDetail(date ?? '')

  if (isLoading) return <p className="p-4">Načítám detail dne…</p>
  if (error) return <div className="p-4 text-red-600">Chyba: {error.message}</div>

  return (
    <>
      <Floor variant={FloorVariant.SECONDARY}>
        <h1 className="text-xl font-bold capitalize">{date ? formatDate(date) : '—'}</h1>
        {summary && <DaySummary summary={summary} />}
      </Floor>

      <Floor variant={FloorVariant.PRIMARY}>
        <h2 className="text-l font-bold">Teplota</h2>
        {temperatureChart && <TemperatureChart data={temperatureChart} />}
      </Floor>

      <Floor variant={FloorVariant.PRIMARY}>
        <h2 className="text-l font-bold">Srážky</h2>
        {precipitationChart && <PrecipitationChart data={precipitationChart} />}
      </Floor>

      <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}
