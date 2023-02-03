import React from 'react';

function Win(props) {
  // Render 'you won' page with a next level button
  return (
    <div className="result">
      <h1>You won!</h1>
      <button onClick={props.nextLevel}>Next Level</button>
    </div>
  )
}

export default Win;