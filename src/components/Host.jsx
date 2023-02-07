import React from 'react';

import PropTypes from 'prop-types';
import DefaultPicture from '../assets/Host.png';
import '../styles/Host.css';

function Host({ name, picture }) {
  const Name = name.split(' ');
  return (
    <div className="host-wrapper">
      <div className="host-name-container">
        <p className="">{Name[0]}</p>
        <p className="">{Name[1]}</p>
      </div>
      <div className="host-img-container">
        <img className="host-img" src={picture} alt="profile img" />
      </div>
    </div>
  );
}
export default Host;
Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};
Host.defaultProps = {
  name: '',
  picture: DefaultPicture
};
