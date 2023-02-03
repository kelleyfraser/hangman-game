import React from 'react';

function Lose(props) {
  // Render a 'you lost' page with a retry button.
  return (
    <div className="result">
      <h1>You lost.</h1>
      <button onClick={props.reset}>Retry</button>
    </div>
  )
}

export default Lose;