import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      filteredString: "",
      foods:[
        "candy",
        "black tar heroine",
        "korean dog meat",
        "vitamin b12",
        "spicy pickles",
        "a single banana"
      ]
    }
  }

  handleChange(value) {
    this.setState({filteredString:value})
  }

  render() {
    let newFoods = this.state.foods.filter((element, index) => {
      return element.includes(this.state.filteredString)
    }).map((element, index) => {
      return <h2 key = {index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange = {(e) => this.handleChange(e.target.value)}/>
        {newFoods}
      </div>
    );
  }
}
    

    

export default App;
