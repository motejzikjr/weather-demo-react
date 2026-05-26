import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts'
import type { TemperatureChartPoint } from '~/module/weather/types/TemperatureChartPoint'
import './TemperatureChart.scss'

interface NightRegion {
  start?: string
  end?: string
}

const getNightRegions = (data: TemperatureChartPoint[]): NightRegion[] => {
  const regions: NightRegion[] = []
  let nightStartIndex: number | null = null

  data.forEach((point, i) => {
    if (point.isDay === 0 && nightStartIndex === null) {
      nightStartIndex = i
    } else if (point.isDay === 1 && nightStartIndex !== null) {
      regions.push({
        start: nightStartIndex === 0 ? undefined : data[nightStartIndex].time,
        end: data[i - 1].time,
      })
      nightStartIndex = null
    }
  })

  if (nightStartIndex !== null) {
    regions.push({
      start: nightStartIndex === 0 ? undefined : data[nightStartIndex].time,
      end: undefined,
    })
  }

  return regions
}

interface TemperatureChartProps {
  data: TemperatureChartPoint[]
}

export const TemperatureChart = ({ data }: TemperatureChartProps) => {
  const nightRegions = getNightRegions(data)

  return (
    <div className="TemperatureChart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" interval={11} />
          <YAxis unit="°C" />
          <Tooltip formatter={(value) => `${value} °C`} />
          <Legend />

          {nightRegions.map((region, i) => (
            <ReferenceArea
              key={i}
              x1={region.start}
              x2={region.end}
              fill="#94a3b8"
              fillOpacity={0.15}
            />
          ))}

          <Line
            type="monotone"
            dataKey="temperature"
            name="Teplota"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="apparentTemperature"
            name="Pocitová"
            stroke="#f97316"
            strokeWidth={1.5}
            strokeDasharray="6 3"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="dewPoint"
            name="Rosný bod"
            stroke="#3b82f6"
            strokeWidth={1.5}
            strokeDasharray="2 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
