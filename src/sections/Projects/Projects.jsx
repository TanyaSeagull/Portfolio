import React, { useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard' 
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: "Cat Energy",
    description: "Адаптивный лендинг для магазина питания котов. Полностью валидная вёрстка с использованием методологии БЭМ.",
    demoLink: "https://romanstashuk.github.io/cat-energy/",
    sourceLink: "https://github.com/RomanStashuk/cat-energy"
  },
  {
    id: 2,
    title: "Speed Reaction Game",
    description: "Игра на скорость реакции с таймером и системой рекордов. Реализована на чистом JavaScript.",
    demoLink: "https://romanstashuk.github.io/reaction-time-game/",
    sourceLink: "https://github.com/RomanStashuk/reaction-time-game/"
  },
  {
    id: 3,
    title: "Guess a Number",
    description: "Игра 'Угадай число' с подсказками и подсчётом попыток. Демонстрация работы с DOM и логикой игры.",
    demoLink: "https://romanstashuk.github.io/guess-a-number/",
    sourceLink: "https://github.com/RomanStashuk/guess-a-number/"
  },
  {
    id: 4,
    title: "Calories Counter",
    description: "Приложение для подсчёта калорий с добавлением продуктов и расчётом дневной нормы.",
    demoLink: "https://romanstashuk.github.io/calories-counter/",
    sourceLink: "https://github.com/RomanStashuk/calories-counter/"
  }
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.categories?.includes(activeFilter))

  return (
    <div className="container">
      <section className="projects section" id="projects">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      
        <div className="projects-footer">
          <a 
            href="https://github.com/TanyaSeagull?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>More projects on GitHub</span>
            <FaGithub className="btn-icon" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Projects