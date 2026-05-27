import type { ReactNode } from 'react'

interface AutocompleteListProps {
  children: ReactNode
}

export const AutocompleteList = ({ children }: AutocompleteListProps) => {
  return <ul className="AutocompleteList">{children}</ul>
}
