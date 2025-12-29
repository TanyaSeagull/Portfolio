import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">Frontend Developer</span>
          <h1 className="hero-title">
            Привет, я <span className="highlight">веб-разработчик</span>
          </h1>
          <p className="hero-subtitle">
            Создаю современные, быстрые и адаптивные веб-приложения с акцентом на пользовательский опыт и производительность
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>Мои работы</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Связаться</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">года опыта</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">проектов</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">качество</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Фото разработчика" 
              className="profile-image"
            />
            <div className="image-decoration"></div>
            <div className="tech-stack">
              <div className="tech-item">React</div>
              <div className="tech-item">TypeScript</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero