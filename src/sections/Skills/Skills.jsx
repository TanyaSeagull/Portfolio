import React from 'react'
import { 
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaCheckCircle
} from 'react-icons/fa'
import './Skills.css'

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML/CSS', icon: <><FaHtml5 /><FaCss3Alt /></> },
    { name: 'Node.js', level: 75, icon: <FaNodeJs /> },
    { name: 'Git', level: 85, icon: <FaGitAlt /> }
  ]

  const skillsTags = [
    'Next.js', 'Vite', 'Webpack', 'Sass', 'MongoDB'
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Навыки</h2>
          <p className="section-subtitle">
            Технологии и инструменты, которые я использую в работе
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-footer">
          <div className="skills-tags">
            {skillsTags.map((tag, index) => (
              <span key={index} className="skill-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills