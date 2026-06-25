import { createContext } from 'react'

export interface BookmarksContextValue {
  bookmarks: string[]
  isBookmarked: (title: string) => boolean
  toggleBookmark: (title: string) => void
}

export const BookmarksContext = createContext<BookmarksContextValue | null>(null)
