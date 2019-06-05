import React from "react";
import OptionBox from "./OptionBox";
import rock from "./Images/rock.jpg";
import paper from "./Images/paper.jpeg";
import scissors from "./Images/scissors.jpeg";
import { Container, Header, Button } from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null, compChoice: null };

  optionClick = () => {
    return


  };

  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <Header as="h1">Rock|Paper|Scissors</Header>
        <br />
        <Header as="h2">Player please make a selection</Header>
        <hr />
        <OptionBox name="rock" img={rock} />
        <OptionBox name="paper" img={paper} />
        <OptionBox name="scissors" img={scissors} />      
      </Container>
    );
  }
}

export default App;
