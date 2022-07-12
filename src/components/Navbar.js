import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link to="/">Accordion</Link>
        </li>
        <li>
          <Link to="/list">Search</Link>
        </li>
        <li>
          <Link to="/dropdown">Dropdown</Link>
        </li>
        <li>
          <Link to="/translate">Translate</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
