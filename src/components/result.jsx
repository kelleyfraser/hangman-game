import React from 'react';
import Lose from './lose';
import Win from './win';

function Result(props) {
  // Dynamically render win or lose page given props passed from parent component
  return (
    <div>
      {props.result == 'win' ? <Win nextLevel={props.functions.nextLevel} /> : <Lose reset={props.functions.resetLevel} />}
    </div>
  )
}

export default Result;
