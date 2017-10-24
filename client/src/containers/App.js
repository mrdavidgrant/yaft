import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// components
import '../styles/App.css';
import Navbar from '../components/Navbar.js';
import Exerciselog from '../components/Exerciselog.js';
import ProfileContainer from './ProfileContainer.js';
import Eachsession from '../components/Eachsession.js';
import Startsession from '../components/Startsession.js';

// import injectTapEventPlugin from 'react-tap-event-plugin'

const muiTheme = getMuiTheme({
  palette: {
    pickerHeaderColor: '#EE773E',
    primary1Color: '#EE773E',
    primary2Color: '#EE773E'
  }
})

// injectTapEventPlugin()
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      bulldogs: []
    }
  }
  
  componentWillMount() {
    fetch('https://localhost:3001/api/v1/users/1/activities')
     .then(res => res.json())
     .then(value => {
       console.log('hi', value)
      //  this.setState({bulldogs: value.message.bulldog})
      })
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="appContainer">
            <Route path='/' component={Navbar}/>
            <Route exact path='/users/:user_id/sessions' component={Exerciselog} />
            <Route exact path='/users/:user_id' component={ProfileContainer} />
            <Route exact path='/users/:user_id/sessions/:session_id' component={Eachsession} />
            <Route exact path='/users/:user_id/sessions/:session_id/new' component={Startsession} /> 
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;

