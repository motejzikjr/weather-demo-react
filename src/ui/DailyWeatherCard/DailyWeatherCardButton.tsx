import { Button } from '~/ui/Button/Button'
import { ButtonVariant } from '~/ui/Button/ButtonVariant'

interface Props {
  onDetail: () => void
}

export const DailyWeatherCardButton = ({ onDetail }: Props) => {
  return (
    <Button variant={ButtonVariant.SECONDARY} onClick={onDetail}>
      Detail
    </Button>
  )
}
