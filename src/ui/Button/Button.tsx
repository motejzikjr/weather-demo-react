import type { ComponentPropsWithoutRef } from 'react'
import './Button.scss'
import { ButtonVariant } from './ButtonVariant'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: ButtonVariant
}

export const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button className={`Button ${variant}`} {...props}>
      {children}
    </button>
  )
}
