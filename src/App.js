import React, { Component } from 'react';
import Header from './Header/Header';
import Avatar from './Avatar/Avatar';
import Blurb from './Blurb/Blurb';
import SocialIcon from './SocialIcon/SocialIcon';
import RecentProjects from './RecentProjects/RecentProjects';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main id="content">
          <div className="about">
            <Avatar />
            <Blurb>
              <h2 className="home-h1">WELL, HELLO <span className="waving" role="img" aria-label="Waving Hand">👋🏻</span></h2>
              <p className="hm-about blurb-text">I design and build websites in the wonderful city of Portland, Oregon. I am currently working full time at <a href="https://ironhorse.io">Iron Horse Interactive</a>. A few exciting technologies I’m enjoying are Sass, React, JavaScript, Foundation 6, Flexbox, CSS Grid, Git and WordPress. If you’re interested in chatting feel free to call me up at 503‑863‑9697, check out my <a href="https://www.kennycrippen.com/wp-content/themes/kennycrippen/kennycrippen-cv-2018.pdf" target="_blank" rel="noopener noreferrer">résumé</a> or send me an <a href="mailto:kennycrippen@gmail.com">email</a>.</p>
            </Blurb>
            <div className="social">
              <SocialIcon url="https://twitter.com/kennycrippen" alt="Twitter" imgSrc="🐦" />
              <SocialIcon url="http://www.linkedin.com/in/kennycrippen/" alt="LinkedIn" imgSrc="👨🏻‍💻" />
              <SocialIcon url="https://www.kennycrippen.com/wp-content/themes/kennycrippen/kennycrippen-cv.pdf" alt="Résumé" imgSrc="📄" />
              <SocialIcon url="mailto:kennycrippen@gmail.com" imgSrc="💌" alt="Love Letter" />
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
