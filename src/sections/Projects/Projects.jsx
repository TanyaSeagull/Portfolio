import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const projectsData = [
  // ... существующие данные проектов ...
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Проекты</h2>
          <p className="section-subtitle">
            Последние работы, демонстрирующие мои навыки и подход к разработке
          </p>
        </div>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="projects-footer">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>Больше проектов на GitHub</span>
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects