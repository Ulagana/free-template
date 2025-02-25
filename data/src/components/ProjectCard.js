import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 tabIndex="0">{title}</h3>
      <p tabIndex="0">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title}`}>
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;