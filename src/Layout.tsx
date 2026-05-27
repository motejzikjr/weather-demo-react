import type { ReactNode } from 'react'
import { GeolocationSearch } from './module/geolocation/components/GeolocationSearch'
import { Floor } from './ui/Floor/Floor'
import { FloorVariant } from './ui/Floor/FloorVariant'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Floor variant={FloorVariant.SECONDARY}>
        <GeolocationSearch />
      </Floor>
      {children}
    </>
  )
}
