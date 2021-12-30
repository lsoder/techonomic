import { useState } from 'react'
import Nav from './nav'
import Footer from './footer'
import Menu from './menu'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <Nav onMenuClick={toggleMenu} />
      <Menu isOpen={isMenuOpen} onMenuClose={toggleMenu} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
