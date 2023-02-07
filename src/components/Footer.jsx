import React from 'react';
import Logo from '../assets/LOGO_white.png';
import '../styles/Footer.css';

//import styled from 'styled-components'
//import { StyledLink } from '../../utils/style/Atoms'

function Header() {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <img className="footer-logo" alt={'Logo'} src={Logo} />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Header;
