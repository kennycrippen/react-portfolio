import React from 'react';
import './Blurb.css';

const Blurb = (props) => {
  return(
    <div className="blurb">
      <h2 className="home-h1">WELL, HELLO. <span role="img" aria-label="Waving Hand">👋🏻</span></h2>
      <p className="hm-about">I design and build websites in the wonderful city of Portland, Oregon. I am currently working full time at <a href="https://ironhorse.io">Iron Horse Interactive</a>. A few exciting technologies I’m enjoying are Sass, JavaScript, Foundation 6, Flexbox, CSS Grid, Git and WordPress. If you’re interested in chatting feel free to call me up at 503‑863‑9697, check out my <a href="https://www.kennycrippen.com/wp-content/themes/kennycrippen/kennycrippen-cv-2018.pdf" target="_blank" rel="noopener noreferrer">résumé</a> or send me an <a href="mailto:kennycrippen@gmail.com">email</a>.</p>
    </div>
  );
}

export default Blurb;