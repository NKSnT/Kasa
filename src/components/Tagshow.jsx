import React from 'react';

import '../styles/Tagshow.css';

function Tagshow({ tags }) {
  return (
    <div className="tag-container">
      <p>{tags}</p>
    </div>
  );
}
export default Tagshow;
