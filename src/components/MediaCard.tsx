import { useBookmarks } from '../context/useBookmarks'
import { useThumbnailSize } from '../hooks/useThumbnailSize'
import type { Movie } from '../types/movie'
import { BookmarkCardIcon, CategoryMovieIcon } from './icons/Icons'
import tvMetaIcon from '../assets/Shape(2).png'
import './MediaCard.css'

interface MediaCardProps {
  movie: Movie
}

export function MediaCard({ movie }: MediaCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const thumbnailSize = useThumbnailSize()
  const bookmarked = isBookmarked(movie.title)
  const thumbnail = movie.thumbnail.regular[thumbnailSize]

  return (
    <article className="media-card">
      <div className="media-card__image-wrap">
        <img
          className="media-card__image"
          src={thumbnail}
          alt={movie.title}
          loading="lazy"
        />
        <button
          type="button"
          className={`media-card__bookmark ${bookmarked ? 'media-card__bookmark--active' : ''}`}
          onClick={() => toggleBookmark(movie.title)}
          aria-label={bookmarked ? `Remove ${movie.title} from bookmarks` : `Bookmark ${movie.title}`}
        >
          <BookmarkCardIcon filled={bookmarked} />
        </button>
      </div>

      <div className="media-card__meta">
        <span>{movie.year}</span>
        <span className="media-card__dot" aria-hidden="true" />
        {movie.category === 'TV Series' ? (
          <img
            src={tvMetaIcon}
            alt="TV Series"
            className="media-card__category-icon"
          />
        ) : (
          <CategoryMovieIcon />
        )}
        <span>{movie.category}</span>
        <span className="media-card__dot" aria-hidden="true" />
        <span>{movie.rating}</span>
      </div>

      <h3 className="media-card__title">{movie.title}</h3>
    </article>
  )
}
