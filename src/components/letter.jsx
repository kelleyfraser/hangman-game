import React from 'react';

function Letter(props) {
  return (
    <span className={props.guessed.includes(props.letter) ? "letter" : "letter hidden"}>{props.letter}</span>
  );
}

export default Letter;