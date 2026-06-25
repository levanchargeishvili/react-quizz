import { SearchIcon } from './icons/Icons'
import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search for TV series',
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <SearchIcon className="search-bar__icon" />
      <input
        className="search-bar__input"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  )
}
