import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              Portfolio<span className="logo-dot">.</span>
            </a>
            <p className="footer-text">
              Создаю современные веб-приложения с любовью к деталям
            </p>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Навигация</h3>
            <ul className="footer-list">
              <li><a href="#about" onClick={scrollToTop}>Обо мне</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#skills">Навыки</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Tanya Seagull. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer