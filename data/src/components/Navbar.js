import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/style/global.css';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;