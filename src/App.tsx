import { BookmarksProvider } from './context/BookmarksContext'
import { MoviesProvider } from './context/MoviesContext'
import { TvSeriesPage } from './pages/TvSeriesPage'

function App() {
  return (
    <MoviesProvider>
      <BookmarksProvider>
        <TvSeriesPage />
      </BookmarksProvider>
    </MoviesProvider>
  )
}

export default App
