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
        return ('Tie');
      } else if (userChoice === 'Rock' && compChoice === 'Paper') {
        return ('Sorry You Lose!');
      } else if (userChoice === 'Rock' && compChoice === 'Scissors') {
        return ('You Win!');
      } else if (userChoice === 'Paper' && compChoice === 'Rock') {
        return ('You Win');
      } else if (userChoice === 'Paper' && compChoice === 'Paper') {
        return('Tie');
      } else if (userChoice === 'Paper' && compChoice === 'Scissors') {
        return('Sorry You Lose!');
      } else if (userChoice === 'Scissors' && compChoice === 'Rock') {
        return ('Sorry You Lose!');
      } else if (userChoice === 'Scissors' && compChoice === 'Paper') {
        return ('You Win!');
      } else if (userChoice === 'Scissors' && compChoice === 'Scissors') {
        return('Tie');
      } else {
        return ('Default')
      }
  }
  
  render() {
    return (
      <>
      
      <Container style={{ marginTop: "25px" }}>
        <Header as="h1">Rock|Paper|Scissors</Header>
        <br />
        <Header as="h2">Player please make a selection</Header>
        <hr />
        <OptionBox name="Rock" img={rock} optionClick={this.optionClick}/>
        <OptionBox name="Paper" img={paper} optionClick={this.optionClick}/>
        <OptionBox name="Scissors" img={scissors} optionClick={this.optionClick}/>   
        
      </Container>
        <div>Player Choice: {this.state.userChoice}</div>
        <div>Computer: {this.computerResult()}</div>
        <div>{this.finalResult()}</div>
      </>

      

      
    );


    
  }
}

export default App;
