import React from 'react';
import kenny_bw from './img/kenny_bw.png';
import kenny_color from './img/kenny_color.png';
import './Avatar.css';

const Avatar = () => {
  return(
    <div className="kenny">
      <img className="kenny-bw" alt="Kenny Avatar" aria-hidden="true" src={kenny_bw} />
      <img className="kenny-color" alt="Kenny Avatar" src={kenny_color} />
    </div>
  );
}

export default Avatar;