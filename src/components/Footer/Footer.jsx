import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#hero" className="logo">
              Portfolio<span className="logo-dot">.</span>
            </a>
            <p className="footer-text">
              Создаю современные веб-приложения с любовью к деталям
            </p>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Быстрые ссылки</h3>
            <ul className="footer-list">
              <li><a href="#about">Обо мне</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#skills">Навыки</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3 className="footer-title">Социальные сети</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
                Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Мое портфолио. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer