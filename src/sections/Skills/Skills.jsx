import React from 'react'
import './Skills.css'

function Skills() {
  // Данные для навыков
  const hardSkills = [
    'HTML5, CSS3',
    'CSS preprocessors (Sass/SCSS)',
    'Responsive/Adaptive design',
    'JavaScript (ES6+)',
    'React',
    'BEM Methodology',
    'Vite, Webpack',
    'Git/GitHub',
    'Figma'
  ]

  const softSkills = [
    'Teamwork',
    'Growth Mindset',
    'Critical thinking',
    'Problem-solving',
    'Attention to detail',
    'Communication',
    'Time management',
    'Adaptability'
  ]

  const languages = [
    'Russian: Native',
    'English: Fluent (C1)',
    'French: Beginner'
  ]

  return (
    <div className="container">
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills__wrap">
          <div className="skills__list-wrap">
            <h3 className="skills__subtitle">Hard Skills</h3>
            <ul className="skills__list">
              {hardSkills.map((skill, index) => (
                <li key={index} className="skills__item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="skills__list-wrap">
            <h3 className="skills__subtitle">Soft Skills</h3>
            <ul className="skills__list">
              {softSkills.map((skill, index) => (
                <li key={index} className="skills__item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="skills__list-wrap">
            <h3 className="skills__subtitle">Languages</h3>
            <ul className="skills__list">
              {languages.map((language, index) => (
                <li key={index} className="skills__item">{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills