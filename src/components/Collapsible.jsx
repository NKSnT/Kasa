import { React, useState, useEffect } from 'react';

import { useRef } from 'react';

import arrow_down from '../assets/arrow_down.png';
import arrow_up from '../assets/arrow_up.png';
import '../styles/Collapsible.css';

function Collapsible(props) {
  console.log(props);
  console.log(props.content);
  /*  props.content.map((element) => (
    <p className="">
      {element}
    </p>
  )) */

  const contentRef = useRef();

  const [isAList, setIsAList] = useState(false);
  useEffect(() => {
    function handleList() {
      if (Array.isArray(props.content)) {
        setIsAList(true);
      }
    }
    handleList();
  }, []);
  console.log(isAList);
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="collapsible-container">
      <div className="collapsible-content-parent">
        <p className="">{props.label}</p>
        <button className="collapsible-button" onClick={toggle}>
          {open && <img src={arrow_down} alt="arrow" className="" />}
          {!open && <img src={arrow_up} alt="arrow" className="" />}
        </button>
      </div>

      <div
        className={'collapsible-content'}
        ref={contentRef}
        style={open ? { height: contentRef.current.scrollHeight + 'px' } : { height: '0px' }}>
        {isAList ? (
          props.content.map((element, index) => (
            <p className="" key={index} style={open ? { opacity: '1' } : { opacity: '0' }}>
              {element}
            </p>
          ))
        ) : (
          <p className="" style={open ? { opacity: '1' } : { opacity: '0' }}>
            {props.content}
          </p>
        )}
      </div>
      {
        //without any render (no animation)
        /* {open && (
        <div className="collapsible-content test">
          {isAList ? (
            props.content.map((element, index) => (
              <p className="" key={index}>
                {element}
              </p>
            ))
          ) : (
            <p className="">{props.content}</p>
          )}
        </div>
      )} */
      }
    </div>
  );
}

export default Collapsible;
