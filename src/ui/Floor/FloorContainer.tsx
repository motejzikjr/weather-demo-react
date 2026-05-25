import type { ReactNode } from 'react'

interface FloorContainerProps {
  children: ReactNode
}

export function FloorContainer({ children }: FloorContainerProps) {
  return (
    <div className="Floor-container flex flex-col gap-4">
      {children}
    </div>
  )
}
