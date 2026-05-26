import type { MinutelySummary } from '~/module/weather/types/MinutelySummary'
import './DaySummary.scss'
import { DaySummaryWeatherIcon } from './DaySummaryWeatherIcon'
import { DaySummaryTemperature } from './DaySummaryTemperature'
import { DaySummaryPrecipitation } from './DaySummaryPrecipitation'
import { DaySummarySunshine } from './DaySummarySunshine'

interface DaySummaryProps {
  summary: MinutelySummary
}

export function DaySummary({ summary }: DaySummaryProps) {
  return (
    <div className="DaySummary border-2 border-amber-600 flex flex-col xs:flex-row gap-4 p-4 rounded-lg w-full xs:w-max">
      <DaySummaryWeatherIcon code={summary.dominantWeatherCode} />
      <DaySummaryTemperature min={summary.temperatureMin} max={summary.temperatureMax} />
      <DaySummaryPrecipitation total={summary.totalPrecipitation} />
      <DaySummarySunshine durationSeconds={summary.totalSunshineDuration} />
    </div>
  )
}
