import React from 'react';
import { motion } from 'framer-motion';
import '../assets/style/global.css';

const Home = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero">
        <h1 tabIndex="0">Hi, I'm [Your Name]</h1>
        <p tabIndex="0">A passionate frontend developer specializing in React.js and UI design.</p>
        <button className="cta-button" aria-label="View my projects">Explore My Work</button>
      </div>
    </motion.section>
  );
};

export default Home;