import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { BOOKMARKS_STORAGE_KEY } from '../api/constants'
import { BookmarksContext } from './bookmarks-context'

function readBookmarks(): string[] {
  try {
    const stored = localStorage.getItem(BOOKMARKS_STORAGE_KEY)
    if (!stored) return []
    const parsed: unknown = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : []
  } catch {
    return []
  }
}

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>(readBookmarks)

  useEffect(() => {
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks))
  }, [bookmarks])

  const isBookmarked = useCallback(
    (title: string) => bookmarks.includes(title),
    [bookmarks],
  )

  const toggleBookmark = useCallback((title: string) => {
    setBookmarks((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title],
    )
  }, [])

  const value = useMemo(
    () => ({ bookmarks, isBookmarked, toggleBookmark }),
    [bookmarks, isBookmarked, toggleBookmark],
  )

  return (
    <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
  )
}
