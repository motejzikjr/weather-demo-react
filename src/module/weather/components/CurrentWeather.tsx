import { MdRefresh } from 'react-icons/md'
import { format, parseISO } from 'date-fns'
import { CurrentWeather as CurrentWeatherType } from '../types/CurrentWeather'

interface Props {
  current: CurrentWeatherType
  onRefresh: () => void
}

export const CurrentWeather = ({ current, onRefresh }: Props) => {
  return (
    <div className="flex gap-4 flex-wrap p-2">
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm">
          Čas: {current.time ? format(parseISO(current.time), 'dd.MM.yyyy HH:mm') : '—'}
        </p>
        <p className="text-sm">Aktuální teplota: {current.temperature}°C</p>
        <p className="text-sm">Rychlost větru: {current.windSpeed} km/h</p>
        <button
          onClick={onRefresh}
          className="mt-2 flex items-center gap-1 px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm cursor-pointer"
        >
          <MdRefresh className="text-base" />
          Obnovit
        </button>
      </div>
    </div>
  )
}
