import React, { Component } from 'react';
import logo from './logo.svg';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      list:[],
      input:""
    }
  }

  handleOnClick = () => {
    this.setState({
      list:[ this.state.list, this.state.input],
      input:""
    })
  }

  handleInputChange(value){
    this.setState({input:value})
  }

  render() {

    let  list = this.state.list.map((el, i) => {
      return( <Todo key={i} task={el} />
      )
    })

    return (
      <div className="App">
       <h3>this is my task list</h3>

        <input value={this.state.input}
        onChange={ e=> this.handleInputChange(e.target.value)}/>
        <button onClick={this.handleOnClick}>Add</button>

        { list }

      </div>
    );
  }
}

export default App;
