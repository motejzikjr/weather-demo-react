import { formatDate } from '~/utils/formatDate'

interface Props {
  date?: string
}

export const DailyWeatherCardDate = ({ date }: Props) => {
  if (!date) return null

  return (
    <div className="DailyWeatherCard-date">
      {formatDate(date)}
    </div>
  )
}
