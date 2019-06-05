import React from "react";
import OptionBox from "./OptionBox";
import rock from "./Images/rock.jpg";
import paper from "./Images/paper.jpeg";
import scissors from "./Images/scissors.jpeg";
import { Container, Header, Button } from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null , compChoice: null };

  optionArr= ["Rock", "Paper", "Scissors"];

  optionClick = (choice) => {
    //this.state.userChoice
    const { userChoice } = this.state
    this.setState({userChoice: choice})
  };
  
  randomCompChoice = () => {
   return this.optionArr[Math.floor(Math.random() * this.optionArr.length)]
  }

  computerResult = () => {
    return this.state.userChoice !== null ? <div>{this.randomCompChoice()}</div> : <div></div>
  }
  
  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <Header as="h1">Rock|Paper|Scissors</Header>
        <br />
        <Header as="h2">Player please make a selection</Header>
        <hr />
        <OptionBox name="rock" img={rock} optionClick={this.optionClick}/>
        <OptionBox name="paper" img={paper} optionClick={this.optionClick}/>
        <OptionBox name="scissors" img={scissors} optionClick={this.optionClick}/>   
        <div>your choice: {this.state.userChoice}</div>
        <div>computer choice: {this.computerResult()}</div>   
      </Container>

      

      
    );


    
  }
}

export default App;
