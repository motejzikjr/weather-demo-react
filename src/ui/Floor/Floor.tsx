import type { ReactNode } from 'react'
import './Floor.scss'
import { FloorVariant } from './FloorVariant'
import { FloorContainer } from './FloorContainer'

interface FloorProps {
  variant: FloorVariant
  children: ReactNode
}

export function Floor({ variant, children }: FloorProps) {
  return (
    <section className={`Floor ${variant}`}>
      <FloorContainer>
        {children}
      </FloorContainer>
    </section>
  )
}
