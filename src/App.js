import React, { useState, useEffect } from "react";
import Game from './components/game';
import Help from './components/help';
import Result from './components/result';
import words from './dictionary';
import './App.scss';

// Helper function to get setState to session storage or a default supplied value
function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);

  if (!stored) {
    return defaultValue;
  }

  return JSON.parse(stored);
}

function App() {
  // Hard code max moves 
  const maxMoves = 6;

  // gameState object generated from session storage or as an empty default game
  const [state, setState] = useState(getSessionStorageOrDefault('gameState', {
    level: 0,
    movesLeft: maxMoves,
    gameStatus: "",
    guessed: [],
    stringLength: 0,
    solution: fetchWord()
  }));

  // Update sessionStorage on state change
  useEffect(() => {
    sessionStorage.setItem('gameState', JSON.stringify(state));
  }, [state]);


  // ====== Game play functions =======
  // Fetch word from words dictionary json using a random index
  function fetchWord() {
    let randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
  }

  // Function to update results state
  const updateResult = (gameStatus) => {
    setState({
      ...state,
      gameStatus: gameStatus
    })
  }

  // Decrement moves in state, when moves left reaches zero update result to 'lose'
  const decrementMoves = () => {
    if (state.movesLeft > 0) {
      setState({
        ...state,
        movesLeft: --state.movesLeft
      });

      if (state.movesLeft === 0) {
        updateResult('lose');
      }
    }
  }

  // Verify letter supplied to solution word
  const verifyLetter = (letter) => {
    return state.solution.includes(letter.toLowerCase())
  }

  // Update word in storage and in UI given a letter
  const updateWord = (letter) => {
    // Initialize variables to aid in updating storage and UI
    let oldGuessed = state.guessed;
    let letterOccurances = state.solution.split(letter.toLowerCase()).length - 1;
    let stringLength = state.stringLength;

    // Add new letter to array of guessed letters and increment stringLength value
    setState({
      ...state,
      guessed: [...oldGuessed, letter.toLowerCase()],
      stringLength: stringLength + letterOccurances
    });

    // If the string length variable is equal to the solution word length update result on a delay to improve UX
    if (stringLength + letterOccurances >= state.solution.length) {
      setTimeout(() => {
        updateResult('win');
      }, 500);
    }
  }

  // Reset level
  const resetLevel = () => {
    setState({
      ...state,
      movesLeft: maxMoves,
      gameStatus: "",
      guessed: [],
      stringLength: 0,
    });
  }

  // Increments level and fetches new word
  const nextLevel = () => {
    setState({
      movesLeft: maxMoves,
      gameStatus: "",
      guessed: [],
      stringLength: 0,
      level: ++state.level,
      solution: fetchWord()
    })
  }

  // Handle key click event
  const handleKeyClick = (e) => {
    let letter = e.target.innerHTML;
    // Verify if letter is in solution word
    let isCorrect = verifyLetter(letter);

    // Either decrement moves or update word in storage and UI
    if (!isCorrect) {
      decrementMoves()
    } else if (isCorrect) {
      updateWord(letter);
    }
  }

  return (
    <div className="App">
      <Help />
      {!state.gameStatus ?
        <Game guessed={state.guessed} handleKeyClick={handleKeyClick} reset={resetLevel} word={state.solution} moves={state.movesLeft} level={state.level} /> :
        <Result result={state.gameStatus} functions={{ nextLevel: nextLevel, resetLevel: resetLevel }} />
      }
    </div>
  );
}

export default App;
