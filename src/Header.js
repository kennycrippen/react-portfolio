import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.css';

const Header = () => {
  return(
    <div id="header">
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;