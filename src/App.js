
import React, { Component } from 'react';
import './App.css';
import Watch from './watch'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stateful timer</h1>
        <Watch />
      </div>
    );
  }
}



export default App;


