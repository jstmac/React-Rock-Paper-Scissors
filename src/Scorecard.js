import React, { useState, } from "react";
import { Container, Header,} from "semantic-ui-react";

function Scorecard ({finalResult}) {  

  
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [ties, setTies] = useState(0)

  const score = () => {
      if ({finalResult} === "You Win!") {
        {setWins(wins + 1) } 
      } else if ({finalResult} === "Sorry You Lose") {
        {setLosses (losses + 1)}
      } else  {
        {setTies (ties +1)}
      }
    }







  return (
    <div>
      <p>You Won {wins} times</p>
      <p>You Lost {losses} times</p>
      <p>You Tied {ties}</p>
    </div>
  );
}

export default Scorecard


