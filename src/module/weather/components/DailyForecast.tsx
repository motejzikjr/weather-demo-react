import { format, parseISO } from 'date-fns'
import { cs } from 'date-fns/locale'
import { DailyForecast as DailyForecastType } from '../types/DailyForecast'
import { WeatherIcon } from '../utils/weatherCodeToIcon'
import { Button } from '~/ui/Button/Button'
import { ButtonVariant } from '~/ui/Button/ButtonVariant'

interface Props {
  forecast: DailyForecastType[]
}

export const DailyForecast = ({ forecast }: Props) => {
  return (
    <div className="flex gap-4 flex-wrap p-2">
      {forecast.map((day: DailyForecastType) => (
        <div key={day.date} className="bg-white rounded-xl shadow p-4 min-w-40">
          <p className="font-bold text-sm mb-2">
            {day.date ? format(parseISO(day.date), 'EEEE d. MMMM', { locale: cs }) : '—'}
          </p>
          <WeatherIcon code={day.code} size={32} />
          <p className="text-sm mt-1">Min: {day.temperatureFrom}°C</p>
          <p className="text-sm">Max: {day.temperatureTo}°C</p>

          <Button variant={ButtonVariant.SECONDARY}>Detail</Button>
        </div>
      ))}
    </div>
  )
}
