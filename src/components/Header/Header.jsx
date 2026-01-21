import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'About me', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Логотип */}
          <a href="#" className="logo" onClick={handleNavClick}>
            <span className="logo-text">Portfolio</span>
            <span className="logo-dot">.</span>
          </a>

          {/* Навигация для десктопа */}
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Кнопка меню с иконками */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Мобильное меню */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-list">
              <li>
                <a 
                  href="#" 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Main page
                </a>
              </li>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header