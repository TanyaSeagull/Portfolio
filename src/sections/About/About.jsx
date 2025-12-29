import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Обо мне</h2>
        <div className="about-content">
          <p>
            Я фронтенд разработчик с опытом создания современных веб-приложений. 
            Специализируюсь на React, TypeScript и современных подходах к разработке.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About