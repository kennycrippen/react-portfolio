import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = () => {
  return(
      <nav>
        <AnchorLink href="#recentprojects" id="workscroll">WORK</AnchorLink>
        <a href="/">BLOG</a>
      </nav>
  );
}

export default Nav;