import React, { Component } from 'react';
import techdecoded_thumb from './img/tech-decoded-thumb.jpg';
import './RecentProjects.css';

class RecentProjects extends Component {
  state = {
    projects: [
      {url: 'https://google.com', thumb: techdecoded_thumb, name: 'Intel® Tech Decoded', alt: 'Tech Decoded', id: 1},
      {url: 'https://google.com', thumb: techdecoded_thumb, name: 'Intel® Tech Decoded', alt: 'Tech Decoded', id: 2},
      {url: 'https://google.com', thumb: techdecoded_thumb, name: 'Intel® Tech Decoded', alt: 'Tech Decoded', id: 3},
      {url: 'https://google.com', thumb: techdecoded_thumb, name: 'Intel® Tech Decoded', alt: 'Tech Decoded', id: 4},
      {url: 'https://google.com', thumb: techdecoded_thumb, name: 'Intel® Tech Decoded', alt: 'Tech Decoded', id: 5},
      {url: 'https://google.com', thumb: techdecoded_thumb, name: 'Intel® Tech Decoded', alt: 'Tech Decoded', id: 6}
    ],
  }
  render() {
    return(
      <div id="recentprojects">
        <h2>RECENT PROJECTS</h2>
        <div id="projects">
          {this.state.projects.map((project, index) => {
            return(
              <div className="project" key={project.id}>
                <a href={project.url}>
                  <img width="189" height="189" src={project.thumb} alt={project.alt} />
                </a>
                <p className="home-project-title">{project.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecentProjects;