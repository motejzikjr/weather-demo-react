import { MdRefresh } from 'react-icons/md'
import { Button } from '~/ui/Button/Button'
import { ButtonVariant } from '~/ui/Button/ButtonVariant'

interface Props {
  onRefresh: () => void
}

export function CurrentWeatherCardButton({ onRefresh }: Props) {
  return (
    <Button variant={ButtonVariant.PRIMARY} onClick={onRefresh}>
      <MdRefresh />
      Obnovit
    </Button>
  )
}
