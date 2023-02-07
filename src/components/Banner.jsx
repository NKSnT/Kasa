import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../assets/Background (1).png';

import '../styles/Banner.css';

function Banner({ cover, title }) {
  return (
    <div className="banner">
      <img src={cover} alt="Banner img" className="banner-img" />
      <p className="banner-text">{title}</p>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};
Banner.defaultProps = {
  title: '',
  cover: DefaultPicture
};

export default Banner;
