import React from 'react';

function Help() {
  // Function that closes help window
  const handleClose = (e) => {
    let help = e.target.parentNode.parentNode.parentNode.classList;
    help.add('hidden');
  }

  return (
    <div className="help hidden">
      <div className="help-container">
        <button onClick={handleClose} className="icon-btn"><i className="fa fa-times"></i></button>
        <div className="help-content">
          <h1>How To Play</h1>
          <ul>
            <li><p>Guess one letter at a time to reveal the secret word.</p></li>
            <li><p>Each incorrect guess adds a portion to the hangman character. You only get 6 total incorrect guesses.</p></li>
            <li><p>You can restart a level at any time by clicking the refresh icon in the top right corner.</p></li>
            <li><p>If you lose a level you must try again until you get the word before you're able to move to the next level.</p></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Help;