import React, { Component } from 'react';
import logo from './appStyles/logo.svg';
import './appStyles/App.css';
import NewWorkout from './components/NewWorkout';


class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <NewWorkout />
      </div>

    );
  }
}

export default App;
