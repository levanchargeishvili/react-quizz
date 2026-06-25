import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
  activePage?: 'home' | 'movies' | 'tv' | 'bookmarks'
}

export function Layout({ children, activePage = 'tv' }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar activePage={activePage} />
      <div className="layout__body">
        <Navbar activePage={activePage} />
        <main className="layout__main">{children}</main>
      </div>
    </div>
  )
}
