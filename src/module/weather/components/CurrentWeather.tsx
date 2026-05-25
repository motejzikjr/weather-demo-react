import { CurrentWeather as CurrentWeatherType } from '../types/CurrentWeather'
import { CurrentWeatherCard } from '~/ui/CurrentWeatherCard/CurrentWeatherCard'

interface Props {
  current: CurrentWeatherType
  onRefresh: () => void
}

export const CurrentWeather = ({ current, onRefresh }: Props) => {
  return <CurrentWeatherCard current={current} onRefresh={onRefresh} />
}
