// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <Link to="/">Mental Health and Wellness</Link>
      </div>
      <ul className="navList">
        <li>
          <Link to="/Home" className="navLink">Home</Link>
        </li>
        <li>
          <Link to="/profile" className="navLink">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span className="profile-name"> Dr. Jessica Bennett</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
