import { React, useState, useEffect } from 'react';

import '../styles/Tagshow.css';

function Tagshow({ tags }) {
  const [isTooLong, setIsTooLong] = useState(false);
  useEffect(() => {
    function handleContainerSize() {
      if (tags.length > 10) {
        setIsTooLong(true);
      }
    }
    handleContainerSize();
  }, []);
  console.log(tags);
  console.log(tags.length);

  return (
    <div className={isTooLong ? 'tag-container_big' : 'tag-container'}>
      <p>{tags}</p>
    </div>
  );
}
export default Tagshow;
