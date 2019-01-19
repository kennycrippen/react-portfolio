import React from 'react';
import './SocialIcon.css';

const SocialIcon = (props) => {
    return(
      <a href={props.url}>
        <span role="img" aria-label={props.alt}>{props.imgSrc}</span>
      </a>
    );
}

export default SocialIcon;