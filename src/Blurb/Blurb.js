import React from 'react';
import './Blurb.css';

const Blurb = (props) => {
  return(
    <div className="blurb">
      { props.children }
    </div>
  );
}

export default Blurb;