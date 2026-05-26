import { WeatherIcon } from '~/module/weather/utils/weatherCodeToIcon'

interface Props {
  code?: number
}

export function DaySummaryWeatherIcon({ code }: Props) {
  return <WeatherIcon code={code} size={56} />
}
