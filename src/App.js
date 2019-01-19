import React, { Component } from 'react';
import Header from './Header';
import Avatar from './Avatar';
import Blurb from './Blurb';
import SocialIcon from './SocialIcon';
import RecentProjects from './RecentProjects';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main id="content">
          <div className="about">
            <Avatar />
            <Blurb />
            <div className="social">
              <SocialIcon url="https://twitter.com/kennycrippen" alt="Twitter" imgSrc="🐦" />
              <SocialIcon url="http://www.linkedin.com/in/kennycrippen/" alt="LinkedIn" imgSrc="👨🏻‍💻" />
              <SocialIcon url="https://www.kennycrippen.com/wp-content/themes/kennycrippen/kennycrippen-cv.pdf" alt="Résumé" imgSrc="📄" />
              <SocialIcon url="mailto:hello@kennycrippen.com" imgSrc="💌" alt="Love Letter" />
            </div>
          </div>
          <RecentProjects />
        </main>
        <div id="footer">
          <p>© Copyright 2018 Kenny Crippen.</p>
        </div>
      </>
    );
  }
}

export default App;
