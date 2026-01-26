import React from 'react'
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