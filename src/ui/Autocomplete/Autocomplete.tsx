import { useState } from 'react'
import './Autocomplete.scss'
import { AutocompleteItem } from './AutocompleteItem'
import { AutocompleteList } from './AutocompleteList'
import { InputText } from '~/ui/InputText/InputText'

interface AutocompleteProps {
  value: string
  onChange: (value: string) => void
  onSelect: (value: string) => void
  items: { name: string; value: string }[]
  placeholder?: string
  emptyMessage?: string
}

export const Autocomplete = ({
  value,
  onChange,
  onSelect,
  items,
  placeholder,
  emptyMessage = 'Žádné výsledky',
}: AutocompleteProps) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const isOpen = value !== ''

  const handleSelect = (itemValue: string) => {
    onSelect(itemValue)
    setHighlightedIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return

    const count = items.length

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((i) => (count === 0 ? -1 : (i + 1) % count))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((i) => (count === 0 ? -1 : (i - 1 + count) % count))
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < count) {
        e.preventDefault()
        handleSelect(items[highlightedIndex].value)
      }
    } else if (e.key === 'Escape') {
      setHighlightedIndex(-1)
      onChange('')
    }
  }

  return (
    <div className="Autocomplete">
      <InputText
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setHighlightedIndex(-1)
          onChange(e.target.value)
        }}
        onKeyDown={handleKeyDown}
      />
      {isOpen && (
        <AutocompleteList>
          {items.length === 0 ? (
            <li className="AutocompleteList-empty">{emptyMessage}</li>
          ) : (
            items.map((item, index) => (
              <AutocompleteItem
                key={item.value}
                name={item.name}
                isHighlighted={index === highlightedIndex}
                onSelect={() => handleSelect(item.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
              />
            ))
          )}
        </AutocompleteList>
      )}
    </div>
  )
}
