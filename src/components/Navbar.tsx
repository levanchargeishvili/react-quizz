import './Navbar.css'
import logoIcon from '../assets/Movie.png'
import homeIcon from '../assets/Shape.png'
import moviesIcon from '../assets/Shape(1).png'
import tvIcon from '../assets/tv.png'
import bookmarkIcon from '../assets/Bookmark.png'
import profileImage from '../assets/Oval.png'

interface NavbarProps {
  activePage?: 'home' | 'movies' | 'tv' | 'bookmarks'
}

export function Navbar({ activePage = 'tv' }: NavbarProps) {
  return (
    <header className="navbar">
      <img
        className="navbar__logo"
        src={logoIcon}
        alt="Entertainment logo"
        width={32}
        height={25}
      />

      <nav className="navbar__links" aria-label="Main navigation">
        <button type="button" className={`nav-btn ${activePage === 'home' ? 'nav-btn--active' : ''}`} aria-label="Home">
          <img src={homeIcon} alt="" aria-hidden="true" />
        </button>
        <button type="button" className={`nav-btn ${activePage === 'movies' ? 'nav-btn--active' : ''}`} aria-label="Movies">
          <img src={moviesIcon} alt="" aria-hidden="true" />
        </button>
        <button type="button" className={`nav-btn ${activePage === 'tv' ? 'nav-btn--active' : ''}`} aria-label="TV Series">
          <img src={tvIcon} alt="" aria-hidden="true" />
        </button>
        <button type="button" className={`nav-btn ${activePage === 'bookmarks' ? 'nav-btn--active' : ''}`} aria-label="Bookmarks">
          <img src={bookmarkIcon} alt="" aria-hidden="true" />
        </button>
      </nav>

      <img
        className="navbar__avatar"
        src={profileImage}
        alt="User profile"
        width={32}
        height={32}
      />
    </header>
  )
}
