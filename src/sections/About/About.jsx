import React from 'react'
import './About.css'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
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
      icon: 'phone', 
      label: 'Phone', 
      value: '+7 (XXX) XXX-XX-XX',
      link: 'tel:+7XXXXXXXXXX',
      Icon: FaPhone
    },
    { 
      icon: 'gmail', 
      label: 'Email', 
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
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
      value: '@yourusername',
      link: 'https://t.me/yourusername',
      Icon: FaTelegram
    },
    { 
      icon: 'linkedin', 
      label: 'LinkedIn', 
      value: 'Your Name',
      link: 'https://linkedin.com/in/yourusername',
      Icon: FaLinkedin
    }
  ]

  return (
    <section className="about section" id="about">
      <header className="about__header">
        <div className="about__image-wrap">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            width="280" 
            height="300" 
            alt="Фото" 
            className="about__photo"
          />
        </div>
        <div className="about__header-wrap">
          <h1 className="about__title">
            Ваше Имя<br />
            <span>Frontend developer</span>
          </h1>
          
          <div className="about__contacts contacts">
            <ul className="contacts__list">
              <li className="contacts__item">
                <a 
                  href="mailto:your.email@example.com" 
                  className="contacts__link" 
                  aria-label="My email"
                >
                  <FaEnvelope className="contacts__icon contacts__icon--email" />
                </a>
              </li>
              <li className="contacts__item">
                <a 
                  href="https://t.me/yourusername" 
                  className="contacts__link" 
                  aria-label="My Telegram profile"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="contacts__icon contacts__icon--tg" />
                </a>
              </li>
              <li className="contacts__item">
                <a 
                  href="https://github.com/yourusername" 
                  className="contacts__link" 
                  aria-label="My GitHub profile"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub className="contacts__icon contacts__icon--gh" />
                </a>
              </li>
              <li className="contacts__item">
                <a 
                  href="https://www.linkedin.com/in/yourusername/" 
                  className="contacts__link" 
                  aria-label="My LinkedIn profile"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="contacts__icon contacts__icon--li" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
      <div className="about__wrap">
        <div className="about__inner-wrap">
          <h2 className="section__subtitle">About <span>Me</span></h2>
          <p className="about__text">
            Привет! Я фронтенд разработчик. Я увлеченный и внимательный к деталям 
            разработчик программного обеспечения, ищущий должность начального уровня, 
            чтобы использовать свои навыки в программировании, решении сложных проблем 
            и помощи в своевременном завершении проектов.
          </p>
          <a className="about__link" href="/resume.pdf" download>
            Скачать резюме (PDF)
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
  )
}

export default About
