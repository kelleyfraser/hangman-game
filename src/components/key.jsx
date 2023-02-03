import React, { useState } from 'react';

function Key(props) {
  // Initialise clicked state to false
  const [clicked, setClicked] = useState(false);

  // On click call handleKeyClick() function and update clicked state
  const handleClick = (e) => {
    let temp = clicked;
    props.handleKeyClick(e);
    setClicked(!temp);
  }

  // Render key button. Disabled if clicked state is true.
  return (
    <button className="key" value={props.letter} onClick={handleClick} disabled={clicked}>{props.letter}</button>
  )
}

export default Key;