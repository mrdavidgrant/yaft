import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import logo from './appStyles/logo.svg';
import './appStyles/App.css';
import NewWorkout from './components/NewWorkout';

>>>>>>> feature/heroku

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
=======

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <NewWorkout />
      </div>

>>>>>>> feature/heroku
    );
  }
}

export default App;
