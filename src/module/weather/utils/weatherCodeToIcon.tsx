import { IconType } from 'react-icons'
import {
  MdWbSunny,
  MdWbCloudy,
  MdCloud,
  MdGrain,
  MdAcUnit,
  MdWaterDrop,
  MdUmbrella,
  MdThunderstorm,
  MdBlurOn,
} from 'react-icons/md'

interface WeatherIconProps {
  code?: number
  size?: number | string
  className?: string
}

const iconMap: Record<number, IconType> = {
  0: MdWbSunny,    // Clear sky
  1: MdWbSunny,    // Mainly clear
  2: MdWbCloudy,   // Partly cloudy
  3: MdCloud,      // Overcast
  45: MdBlurOn,    // Fog
  48: MdBlurOn,    // Rime fog
  51: MdGrain,     // Drizzle: light
  53: MdGrain,     // Drizzle: moderate
  55: MdGrain,     // Drizzle: dense
  56: MdAcUnit,    // Freezing drizzle: light
  57: MdAcUnit,    // Freezing drizzle: dense
  61: MdWaterDrop, // Rain: slight
  63: MdWaterDrop, // Rain: moderate
  65: MdWaterDrop, // Rain: heavy
  66: MdAcUnit,    // Freezing rain: light
  67: MdAcUnit,    // Freezing rain: heavy
  71: MdAcUnit,    // Snow: slight
  73: MdAcUnit,    // Snow: moderate
  75: MdAcUnit,    // Snow: heavy
  77: MdAcUnit,    // Snow grains
  80: MdUmbrella,  // Rain showers: slight
  81: MdUmbrella,  // Rain showers: moderate
  82: MdUmbrella,  // Rain showers: violent
  85: MdAcUnit,    // Snow showers: slight
  86: MdAcUnit,    // Snow showers: heavy
  95: MdThunderstorm, // Thunderstorm: slight or moderate
  96: MdThunderstorm, // Thunderstorm with slight hail
  99: MdThunderstorm, // Thunderstorm with heavy hail
}

export const WeatherIcon = ({ code, size = 24, className }: WeatherIconProps) => {
  const Icon = (code !== undefined ? iconMap[code] : null) ?? MdWbSunny
  return <Icon size={size} className={className} />
}
