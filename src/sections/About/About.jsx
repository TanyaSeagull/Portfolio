import React from 'react'
import './About.css'
import { 
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaDownload
} from 'react-icons/fa'

function About() {
  const aboutInfo = [
    { 
      icon: 'location', 
      label: 'Location', 
      value: 'Moscow, Russia',
      link: null,
      Icon: FaMapMarkerAlt
    },
    { 
      icon: 'gmail', 
      label: 'Email', 
      value: 'tatiana0chaykina@gmail.com',
      link: 'mailto:tatiana0chaykina@gmail.com',
      Icon: FaEnvelope
    },
    { 
      icon: 'github', 
      label: 'GitHub', 
      value: 'Tatiana Chaykina',
      link: 'https://github.com/TanyaSeagull',
      Icon: FaGithub
    },
    { 
      icon: 'telegram', 
      label: 'Telegram', 
      value: '@Tanya_Seagull',
      link: 'https://t.me/Tanya_Seagull',
      Icon: FaTelegram
    },
    { 
      icon: 'linkedin', 
      label: 'LinkedIn', 
      value: 'Tatiana Chaykina',
      link: 'https://linkedin.com/in/tatiana-chaikina',
      Icon: FaLinkedin
    }
  ]

  return (
    <div className="container">
      <section className="about section" id="about">
          {/* Header с фото и именем */}
          <header className="about__header">
            <div className="about__image-wrap">
              <img 
                src="./my-photo.JPG" 
                width="280" 
                height="300" 
                alt="Tatiana Chaykina" 
                className="about__photo"
              />
            </div>
          <div className="about__header-wrap">
              <h1 className="about__title">
                Tatiana Chaykina<br />
                <span>Frontend developer</span>
              </h1>
            </div>
          </header>
          
          {/* Контентная часть */}
          <div className="about__wrap">
            <div className="about__inner-wrap">
              <h2 className="section__subtitle">About Me</h2>
              <p className="about__text">
                Hello! I'm a junior frontend developer focused on core web technologies—React, JavaScript, HTML, and CSS.
                I'm looking for a Junior Frontend Developer role where I can help create clean, functional interfaces, tackle meaningful challenges, and grow as a professional.
              </p>
              <a className="about__link" href="/resume.pdf" download>
                Download CV (PDF)
                <FaDownload className="about__icon" />
              </a>
            </div>
            
            <dl className="about__list">
              {aboutInfo.map((item, index) => {
                const Icon = item.Icon
                return (
                  <div className="about__list-item" key={index}>
                    <dt className="about__list-name">
                      <Icon className="about__list-icon" />
                      {item.label}
                    </dt>
                    <dd className="about__list-value">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
      </section>
    </div>
  )
}

export default About