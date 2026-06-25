import type { Movie } from '../types/movie'
import { MediaCard } from './MediaCard'
import './MediaGrid.css'

interface MediaGridProps {
  items: Movie[]
}

export function MediaGrid({ items }: MediaGridProps) {
  if (items.length === 0) {
    return <p className="media-grid__empty">No results found.</p>
  }

  return (
    <div className="media-grid">
      {items.map((movie) => (
        <MediaCard key={movie.title} movie={movie} />
      ))}
    </div>
  )
}
