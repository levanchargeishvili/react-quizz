import { useMemo, useState } from 'react'
import { Layout } from '../components/Layout'
import { MediaGrid } from '../components/MediaGrid'
import { SearchBar } from '../components/SearchBar'
import { useMovies } from '../context/useMovies'
import './TvSeriesPage.css'

export function TvSeriesPage() {
  const { getByCategory, loading, error } = useMovies()
  const [search, setSearch] = useState('')

  const tvSeries = useMemo(() => {
    const items = getByCategory('TV Series')
    const query = search.trim().toLowerCase()
    if (!query) return items
    return items.filter((movie) => movie.title.toLowerCase().includes(query))
  }, [getByCategory, search])

  return (
    <Layout activePage="tv">
      <SearchBar value={search} onChange={setSearch} />

      <h1 className="page-title">TV Series</h1>

      {loading && <p className="page-status">Loading...</p>}
      {error && <p className="page-status page-status--error">{error}</p>}
      {!loading && !error && <MediaGrid items={tvSeries} />}
    </Layout>
  )
}
