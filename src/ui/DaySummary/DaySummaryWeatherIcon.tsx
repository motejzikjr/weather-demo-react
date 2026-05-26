import { WeatherIcon } from '~/module/weather/utils/weatherCodeToIcon'

interface Props {
  code?: number
}

export const DaySummaryWeatherIcon = ({ code }: Props) => {
  return <WeatherIcon code={code} size={56} />
}
