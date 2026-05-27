import type { ComponentPropsWithoutRef } from 'react'
import './InputText.scss'

type InputTextProps = ComponentPropsWithoutRef<'input'>

export const InputText = ({ ...props }: InputTextProps) => {
  return <input className="InputText" {...props} />
}
