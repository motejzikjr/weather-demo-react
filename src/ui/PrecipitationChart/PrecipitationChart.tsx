import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import type { PrecipitationChartPoint } from '~/module/weather/types/PrecipitationChartPoint'

interface PrecipitationChartProps {
  data: PrecipitationChartPoint[]
}

const formatTooltip = (
  value: string | number | (string | number)[] | undefined,
  name: string | number,
): [string, string] => {
  const v = value != null ? `${value}` : '—'
  if (name === 'Déšť') return [`${v} mm`, String(name)]
  if (name === 'Sníh') return [`${v} cm`, String(name)]
  return [v, String(name)]
}

export const PrecipitationChart = ({ data }: PrecipitationChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 8, right: 24, left: 0, bottom: 0 }} barSize={4}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="time" interval={11} />
        <YAxis />
        <Tooltip formatter={formatTooltip} />
        <Legend />

        <Bar dataKey="rain" name="Déšť" stackId="precipitation" fill="#3b82f6" />
        <Bar dataKey="snowfall" name="Sníh" stackId="precipitation" fill="#a78bfa" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
