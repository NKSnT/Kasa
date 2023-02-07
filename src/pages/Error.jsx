import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Body-page.css';
import '../styles/Error.css';

function Error() {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="error-body">
          <p className="error-404">404</p>
          <p className="error-txt">Oups! La page que vous demandez n'existe pas.</p>
          <p className="error-link">
            <Link to="/">Retourner sur la page d'acceuil</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
