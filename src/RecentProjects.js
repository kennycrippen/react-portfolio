import React from 'react';
import techdecoded_thumb from './img/tech-decoded-thumb.jpg';
import './RecentProjects.css';

const Project = (props) => {
  return(
    <div className="project">
      <a href={props.url}>
        <img width="189" height="189" src={props.img} alt={props.alt} />
      </a>
      <p>{props.name}</p>
    </div>
  );
}

const RecentProjects = () => {
  return(
    <div id="recentprojects">
      <h2>RECENT PROJECTS</h2>
      <div id="projects">
        <Project url="https://google.com" alt="Intel Tech.Decoded" img={techdecoded_thumb} name="Intel&reg; Tech.Decoded" />
        <Project url="https://google.com" alt="Intel Tech.Decoded" img={techdecoded_thumb} name="Intel&reg; Tech.Decoded" />
        <Project url="https://google.com" alt="Intel Tech.Decoded" img={techdecoded_thumb} name="Intel&reg; Tech.Decoded" />
        <Project url="https://google.com" alt="Intel Tech.Decoded" img={techdecoded_thumb} name="Intel&reg; Tech.Decoded" />
        <Project url="https://google.com" alt="Intel Tech.Decoded" img={techdecoded_thumb} name="Intel&reg; Tech.Decoded" />
        <Project url="https://google.com" alt="Intel Tech.Decoded" img={techdecoded_thumb} name="Intel&reg; Tech.Decoded" />
        <Project url="https://google.com" alt="Intel Tech.Decoded" img={techdecoded_thumb} name="Intel&reg; Tech.Decoded" />
      </div>
    </div>
  );
}

export default RecentProjects;