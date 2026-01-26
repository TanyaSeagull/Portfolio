import React, { useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard' 
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: "Yelp Camp",
    description: "YelpCamp is a web application where users can discover, create, and review campgrounds. This project was developed as part of Colt Steele's Web Developer Bootcamp on Udemy.",
    demoLink: "",
    sourceLink: "https://github.com/TanyaSeagull/YelpCamp"
  },
  {
    id: 2,
    title: "Sweet time bakery",
    description: "Landing page for home-made desserts using HTML, SCSS.",
    demoLink: "https://tanyaseagull.github.io/Sweet-Time/",
    sourceLink: "https://github.com/TanyaSeagull/Sweet-Time"
  },
  {
    id: 3,
    title: "A shadow Generator in RGB",
    description: "JS shadow generator with opacity in rgb",
    demoLink: "https://tanyaseagull.github.io/Shadow-Generator/",
    sourceLink: "https://github.com/TanyaSeagull/Shadow-Generator"
  },
  {
    id: 4,
    title: "Constructions",
    description: "Landing page for constructions company using HTML, SCSS",
    demoLink: "https://tanyaseagull.github.io/Constructions/",
    sourceLink: "https://github.com/TanyaSeagull/Constructions"
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