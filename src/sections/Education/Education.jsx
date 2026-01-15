import React from 'react'
import './Education.css'

function Education() {
  // Данные для образования
  const education = [
    {
      degree: 'Specialist Degree in Finance and Banking',
      institution: 'State University of Technology, Kamchatka, Russia',
      year: '2012'
    }
  ]

  // Данные для сертификаций (clickable)
  const certifications = [
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      year: '2023',
      url: 'https://www.udemy.com/certificate/UC-...',
      credentialId: 'UC-123456'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2023',
      url: 'https://www.freecodecamp.org/certification/...',
      credentialId: 'FCC-JS-2023'
    },
    {
      title: 'Advanced CSS and Sass',
      issuer: 'Udemy',
      year: '2022',
      url: 'https://www.udemy.com/certificate/UC-...',
      credentialId: 'UC-789012'
    },
    {
      title: 'Git & GitHub Masterclass',
      issuer: 'Coursera',
      year: '2022',
      url: 'https://www.coursera.org/account/accomplishments/...',
      credentialId: 'CRS-GIT-2022'
    },
    {
      title: 'Web Accessibility',
      issuer: 'edX',
      year: '2021',
      url: 'https://courses.edx.org/certificates/...',
      credentialId: 'EDX-WA-2021'
    }
  ]

  const handleCertClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="container">
      <section className="education section" id="education">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education__wrap">
          {/* Колонка слева: Сертификации (clickable) */}
          <div className="education__list-wrap">
            <h3 className="education__subtitle">Certifications</h3>
            <ul className="education__list">
              {certifications.map((cert, index) => (
                <li 
                  key={index} 
                  className="education__item"
                  onClick={() => handleCertClick(cert.url)}
                  title="Click to view certificate"
                >
                  <div>
                    <div className="education__item-title">{cert.title}</div>
                    <div className="education__item-details">{cert.issuer}</div>
                    <div className="education__item-details">ID: {cert.credentialId}</div>
                    <span className="education__item-year">{cert.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Колонка справа: Образование */}
          <div className="education__list-wrap">
            <h3 className="education__subtitle">Education</h3>
            <ul className="education__list">
              {education.map((edu, index) => (
                <li key={index} className="education__item">
                  <div>
                    <div className="education__item-title">{edu.degree}</div>
                    <div className="education__item-details">{edu.institution}</div>
                    <div className="education__item-details">{edu.description}</div>
                    <span className="education__item-year">{edu.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education