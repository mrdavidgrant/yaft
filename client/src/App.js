import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewWorkout from './NewWorkout';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>{ Header }</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">YOOOOOOO</h1>
        </header>
        <NewWorkout />
      </div>
    );
  }
}

export default App;
