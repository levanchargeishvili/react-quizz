import { createContext } from 'react'
import type { Movie } from '../types/movie'

export interface MoviesContextValue {
  movies: Movie[]
  loading: boolean
  error: string | null
  getByCategory: (category: Movie['category']) => Movie[]
}

export const MoviesContext = createContext<MoviesContextValue | null>(null)
