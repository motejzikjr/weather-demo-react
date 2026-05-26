import { WeatherIcon } from '~/module/weather/utils/weatherCodeToIcon'

interface Props {
  code?: number
}

export const DailyWeatherCardIcon = ({ code }: Props) => {
  return <WeatherIcon code={code} size={32} />
}
