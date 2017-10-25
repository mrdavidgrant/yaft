import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// components
import '../styles/App.css';
import Page1 from '../pages/page1.js';
import Page2 from '../pages/page2.js';
import Page3 from '../pages/page3.js';

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
            <Route exact path='/' component={Page1} />
            <Route exact path='/users/:user_id' component={Page2} />
            <Route path='/users/:user_id/sessions' component={Page3} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;


