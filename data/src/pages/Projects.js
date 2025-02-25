import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'A React app with advanced UI.', link: '#' },
    { title: 'Project 2', description: 'Responsive portfolio site.', link: '#' },
  ];

  return (
    <section className="projects">
      <h2 tabIndex="0">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;