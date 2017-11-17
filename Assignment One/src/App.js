import React, { Component } from 'react';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import './App.css';

class App extends Component {

  state = {
    username: 'Aseel'
  }

  switchUsernameHandler = (event) => {
    this.setState({
       username: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <UserOutput 
          username={this.state.username}
        />
        <UserInput 
          username={this.state.username}
          changed={this.switchUsernameHandler}
        />
      </div>
    );
  }
}

export default App;
