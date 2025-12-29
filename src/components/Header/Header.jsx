import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Эффект для изменения хедера при скролле
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Закрытие меню при клике на ссылку
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Обо мне', href: '#about' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Навыки', href: '#skills' },
    { label: 'Контакты', href: '#contact' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Логотип */}
          <a href="#hero" className="logo" onClick={handleNavClick}>
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

          {/* Кнопка меню для мобильных */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Мобильное меню */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-list">
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