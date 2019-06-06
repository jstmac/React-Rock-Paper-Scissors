import React from "react";
import OptionBox from "./OptionBox";
import rock from "./Images/rock.jpg";
import paper from "./Images/paper.jpeg";
import scissors from "./Images/scissors.jpeg";
import { Container, Header,} from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null , compChoice: null };

  optionArr= ["Rock", "Paper", "Scissors"];

  optionClick = (choice) => {
    //this.state.userChoice
    //const { userChoice } = this.state
    this.setState({userChoice: choice, compChoice: this.optionArr[Math.floor(Math.random() * this.optionArr.length)]})
  };

  computerResult = () => {
   return this.state.userChoice !== null ? <div>{this.state.compChoice}</div> : <div></div>
  }

  // finalResult = () => {
  
  //   const {userChoice, compChoice} = this.state
  //   switch(userChoice, compChoice) {
  //     case userChoice === 'Rock' && compChoice === 'Rock':
  //         return console.log('tie')
  //     case userChoice === 'Rock' && compChoice === 'Paper':
  //         return console.log('lose')
  //     default:
  //         return console.log('default')
    
  // }

  // }

  finalResult = () => {
    const {userChoice, compChoice} = this.state
   
      if (userChoice === 'Rock' && compChoice === 'Rock') {
        console.log('tie');
      } else if (userChoice === 'Rock' && compChoice === 'Paper') {
        console.log('Sorry You Lose!');
      } else if (userChoice === 'Rock' && compChoice === 'Scissors') {
        console.log('You Win!');
      } else if (userChoice === 'Paper' && compChoice === 'Rock') {
        console.log('You Win');
      } else if (userChoice === 'Paper' && compChoice === 'Paper') {
        console.log('Tie');
      } else if (userChoice === 'Paper' && compChoice === 'Scissors') {
        console.log('Sorry You Lose');
      } else if (userChoice === 'Scissors' && compChoice === 'Rock') {
        console.log('Sorry You Lose');
      } else if (userChoice === 'Scissors' && compChoice === 'Paper') {
        console.log('You Win!');
      } else if (userChoice === 'Scissors' && compChoice === 'Scissors') {
        console.log('Tie');
      } else {
        console.log('default')
      }
  }
  
  render() {
    return (
      <>
      <div>{this.finalResult()}</div>
      <Container style={{ marginTop: "25px" }}>
        <Header as="h1">Rock|Paper|Scissors</Header>
        <br />
        <Header as="h2">Player please make a selection</Header>
        <hr />
        <OptionBox name="Rock" img={rock} optionClick={this.optionClick}/>
        <OptionBox name="Paper" img={paper} optionClick={this.optionClick}/>
        <OptionBox name="Scissors" img={scissors} optionClick={this.optionClick}/>   
        <div>your choice: {this.state.userChoice}</div>
        <div>computer choice: {this.computerResult()}</div>   
      </Container>
      </>

      

      
    );


    
  }
}

export default App;
