import React from "react";
import Letter from "./letter";

function GameWindow(props) {
  // Store solution word as an array
  let wordArr = props.word.split('');
  // Get image url based on # of moves left
  let imgUrl = `./images/hangman${props.moves}.png`;
  // Initilise id to use for unique key value
  let id = 0;

  // Render game window with state values passed through props. Map over wordArr to generate letter spaces. 
  return (
    <div className="game-window">
      <div className="moves-left-tracker">
        <p>Moves left: {props.moves}</p>
        <div className="hangman-character">
          <img src={imgUrl}></img>
        </div>
      </div>
      <div className="word-container">
        {wordArr.map(letter => <Letter key={id++} guessed={props.guessed} letter={letter} />)}
      </div>
    </div>
  );

}

export default GameWindow;
