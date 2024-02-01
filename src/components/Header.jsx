import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LOGO.png';
import '../styles/Header.css';

function Header() {
  return (
    <div className="headerWrapper">
      <div className="headerContainer">
        <Link to="/">
          <img className="header-logo" alt={'Logo'} src={Logo} />
        </Link>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
