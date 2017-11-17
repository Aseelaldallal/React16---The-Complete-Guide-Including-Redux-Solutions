import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent" 
import CharComponent from "./CharComponent/CharComponent" 

class App extends Component {

  state = {
    inputLength: 0,
    input: ""
  }


  
  inputFieldChangedHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      input: event.target.value
    });
  }

  deleteCharacterHandler = (index) => {
    const newInput = this.state.input.slice(0,index) + this.state.input.slice(index+1);
    this.setState({
      inputLength: newInput.length,
      input: newInput
    })
  }

  render() {

    let text = (
      <p> Input Length: {this.state.inputLength} </p>
    );

    let characters = null;

    if(this.state.input) {
       characters = (
         <div>
            {
              this.state.input.split('').map((character, index) => {
                return <CharComponent 
                  character={ character } 
                  key = { index }
                  click = {() => this.deleteCharacterHandler(index)} />
              })
            }
         </div>
       )
    }

    return (
      <div className="App">
        <input type="text" value={this.state.input} onChange={this.inputFieldChangedHandler}/>
        {text}
        <ValidationComponent inputLength = {this.state.inputLength}/>
        {characters}
      </div>
    );
  }
}

export default App;
