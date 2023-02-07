import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/LOGO.png';
import '../styles/Header.css';

//import styled from 'styled-components'
//import { StyledLink } from '../../utils/style/Atoms'

function Header() {
  return (
    <div className="headerWrapper">
      <div className="headerContainer">
        <Link to="/">
          <img className="header-logo" alt={'Logo'} src={Logo} />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
