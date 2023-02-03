import React from 'react';
import Key from './key';

function KeyPad(props) {
  // Generate an array from 65 to 90 (representing ascii codes for capital A - Z), then map to each letter using fromCharCode()
  const alphabet = (Array.from(Array(26)).map((e, i) => i + 65)).map((x) => String.fromCharCode(x));

  return (
    // Render a key div for each letter of alphabet array utilising map function
    <div className="keypad">
      {
        alphabet.map((letter) => <Key handleKeyClick={props.handleKeyClick} key={letter} letter={letter} />)
      }
    </div>
  );
}

export default KeyPad;