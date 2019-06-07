import React from "react";
import { Image, } from "semantic-ui-react";

const OptionBox = (props) => (
  <Image 
    src={props.img} 
    size='small' 
    floated='left'
    onClick={() => props.optionClick(props.name)} 
  />
);

// playerScore = 0
//   compScore = 0
  
//   Score = () {
//     if ({finalResult} === 'You Win!') {
//       playerScore += 1;
//     } else if ({finalResult} === 'You Lose') {
//       compScore += 1;
//     } else {
//       return ('')
//     }
//   }




export default OptionBox;
