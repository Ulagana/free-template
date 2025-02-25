import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 tabIndex="0">About Me</h2>
      <div className="about-content">
        <img src="/assets/images/profile.jpg" alt="Profile of [Your Name]" />
        <div>
          <p tabIndex="0">
            I'm a fresher frontend developer with a knack for creating intuitive and visually appealing interfaces. My toolkit includes React.js, JavaScript, and advanced CSS.
          </p>
          <h3 tabIndex="0">Skills</h3>
          <ul aria-label="My skills">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>CSS3 / SASS</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;