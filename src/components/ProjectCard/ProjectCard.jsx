import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label="GitHub Repository"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard