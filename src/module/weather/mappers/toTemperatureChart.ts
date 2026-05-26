import { MinutelyResponse } from '../types/MinutelyResponse'
import { TemperatureChartPoint } from '../types/TemperatureChartPoint'

export const toTemperatureChart = (data: MinutelyResponse): TemperatureChartPoint[] => {
  const { time, temperature_2m, apparent_temperature, dew_point_2m, is_day } = data?.minutely_15 ?? {}

  return (time ?? []).map((isoTime, i) => ({
    time: isoTime.slice(11, 16),
    temperature: temperature_2m?.[i],
    apparentTemperature: apparent_temperature?.[i],
    dewPoint: dew_point_2m?.[i],
    isDay: is_day?.[i] ?? 1,
  }))
}
