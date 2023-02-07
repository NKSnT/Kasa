import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import DefaultPicture from '../assets/default-png.png';
import '../styles/Card.css';

function Card({ title, cover, id }) {
  return (
    <div className="card-grid-container">
      <Link to={`/Logement/${id}`}>
        {/*<Link to={{
               pathname: "/Logement",
               search: "?id="+ id,
               }} >*/}

        <img src={cover} alt="profile du logement" className="card-grid-img" />
        <p className="card-grid-txt">{title}</p>
      </Link>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};
Card.defaultProps = {
  title: '',
  cover: DefaultPicture
};

export default Card;
