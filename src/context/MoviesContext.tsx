import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import axios from 'axios'
import { API_URL } from '../api/constants'
import type { Movie } from '../types/movie'
import { MoviesContext } from './movies-context'

export function MoviesProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadMovies = async () => {
      try {
        const response = await axios.get<Movie[]>(API_URL)
        if (isMounted) {
          setMovies(response.data)
        }
      } catch {
        if (isMounted) {
          setError('Failed to load movies. Please try again later.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    void loadMovies()

    return () => {
      isMounted = false
    }
  }, [])

  const getByCategory = useCallback(
    (category: Movie['category']) =>
      movies.filter((movie) => movie.category === category),
    [movies],
  )

  const value = useMemo(
    () => ({
      movies,
      loading,
      error,
      getByCategory,
    }),
    [movies, loading, error, getByCategory],
  )

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  )
}
