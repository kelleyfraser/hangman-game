import React from "react";
import GameWindow from './gameWindow';
import KeyPad from './keyPad';

function Game(props) {
  // Call reset function from props and reload window when refresh button is clicked
  const resetLevel = () => {
    props.reset();
    window.location.reload(true);
  }

  // Open help window
  const handleOpen = (e) => {
    let help = e.target.parentNode.parentNode.parentNode.parentNode.firstChild.classList;
    help.remove('hidden');
  }

  // Render game page with header, GameWindow and KeyPad components.
  return (
    <div className="game">
      <div className="game-header">
        <button className="icon-btn" onClick={handleOpen}><i className="fa fa-info"></i></button>
        <h1>Hangman lvl {props.level}</h1>
        <button className="icon-btn" onClick={resetLevel}><i className="fa fa-refresh"></i></button>
      </div>
      <GameWindow guessed={props.guessed} moves={props.moves} word={props.word} />
      <KeyPad handleKeyClick={props.handleKeyClick} />
    </div>
  );
}

export default Game;

