interface AutocompleteItemProps {
  name: string
  isHighlighted: boolean
  onSelect: () => void
  onMouseEnter: () => void
}

export const AutocompleteItem = ({
  name,
  isHighlighted,
  onSelect,
  onMouseEnter,
}: AutocompleteItemProps) => {
  return (
    <li
      className={`AutocompleteItem${isHighlighted ? ' AutocompleteItem--highlighted' : ''}`}
      onMouseDown={onSelect}
      onMouseEnter={onMouseEnter}
    >
      {name}
    </li>
  )
}
