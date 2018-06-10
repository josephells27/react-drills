import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods:[
        "bottled water",
        "cocaine",
        "vodka"
      ]
    }
  }
  render() {
    let newFoods = this.state.foods.map((element, index) => {
      return <h3 key = {index}>{ element }</h3>
    })
    return (
      <div className="App">
        { newFoods}
      </div>
    );
  }
}

export default App;
