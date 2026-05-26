import { MinutelyResponse } from '../types/MinutelyResponse'
import { PrecipitationChartPoint } from '../types/PrecipitationChartPoint'

export const toPrecipitationChart = (data: MinutelyResponse): PrecipitationChartPoint[] => {
  const { time, rain, snowfall } = data?.minutely_15 ?? {}

  return (time ?? []).map((isoTime, i) => ({
    time: isoTime.slice(11, 16),
    rain: rain?.[i],
    snowfall: snowfall?.[i],
  }))
}
