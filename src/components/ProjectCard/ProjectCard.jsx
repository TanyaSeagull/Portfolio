import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__links">
          <a 
            href={project.demoLink} 
            className="project-card__link project-card__link--demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="project-card__link-icon" />
            {project.title.toLowerCase().includes('game') ? 'Play Game' : 'Demo'}
          </a>
          <a 
            href={project.sourceLink} 
            className="project-card__link project-card__link--source"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="project-card__link-icon" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}


export default ProjectCard