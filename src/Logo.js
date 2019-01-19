import React from 'react';
import logo from './logo.svg';

const Logo = () => {
  return(
    <a className="logo-container" href="/">
      <img width="83" height="86" src={logo} className="logo" alt="logo" />
    </a>
  );
}

export default Logo;