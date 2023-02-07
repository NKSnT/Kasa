import { React, useState } from 'react';

import arrow_down from '../assets/arrow_down.png';
import arrow_up from '../assets/arrow_up.png';
import '../styles/Collapsible.css';

function Collapsible(props) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="collapsible-container">
      <div className="collapsible-content-parent">
        <p className="">{props.label}</p>
        <button className="collapsible-button" onClick={toggle}>
          {!open && <img src={arrow_down} alt="arrow" className="" />}
          {open && <img src={arrow_up} alt="arrow" className="" />}
        </button>
      </div>
      {open && <div className="collapsible-content">{props.children}</div>}
    </div>
  );
}

export default Collapsible;
