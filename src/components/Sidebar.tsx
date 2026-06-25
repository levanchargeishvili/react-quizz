import './Sidebar.css'
import logoIcon from '../assets/Movie.png'
import homeIcon from '../assets/Shape.png'
import moviesIcon from '../assets/Shape(1).png'
import tvIcon from '../assets/tv.png'
import bookmarkIcon from '../assets/Bookmark.png'
import profileImage from '../assets/Oval.png'

interface SidebarProps {
  activePage?: 'home' | 'movies' | 'tv' | 'bookmarks'
}

export function Sidebar({ activePage = 'tv' }: SidebarProps) {
  return (
    <aside className="sidebar">
      <img
        className="sidebar__logo"
        src={logoIcon}
        alt="Entertainment logo"
        width={32}
        height={25}
      />

      <nav className="sidebar__links" aria-label="Main navigation">
        <button type="button" className={`sidebar-btn ${activePage === 'home' ? 'sidebar-btn--active' : ''}`} aria-label="Home">
          <img src={homeIcon} alt="" aria-hidden="true" />
        </button>
        <button type="button" className={`sidebar-btn ${activePage === 'movies' ? 'sidebar-btn--active' : ''}`} aria-label="Movies">
          <img src={moviesIcon} alt="" aria-hidden="true" />
        </button>
        <button type="button" className={`sidebar-btn ${activePage === 'tv' ? 'sidebar-btn--active' : ''}`} aria-label="TV Series">
          <img src={tvIcon} alt="" aria-hidden="true" />
        </button>
        <button type="button" className={`sidebar-btn ${activePage === 'bookmarks' ? 'sidebar-btn--active' : ''}`} aria-label="Bookmarks">
          <img src={bookmarkIcon} alt="" aria-hidden="true" />
        </button>
      </nav>

      <img
        className="sidebar__avatar"
        src={profileImage}
        alt="User profile"
        width={40}
        height={40}
      />
    </aside>
  )
}
