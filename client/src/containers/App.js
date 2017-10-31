import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// components
import '../styles/App.css';
import Page1 from '../pages/page1.js';
import Page2 from '../pages/page2.js';
import Sessions from '../components/Sessions.js';
import TemplateContainer from './TemplateContainer.js';
import FreeFormContainer from './FreeFormContainer.js';

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

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="appContainer">
            <Route exact path='/' component={Page1} />
            <Route exact path='/users/:user_id' component={Page2} />
            <Route path='/users/:user_id/sessions' component={Sessions} />

              <Route path='/users/:user_id/template' component={TemplateContainer} />
              <Route path='/users/:user_id/createtemplate' component={FreeFormContainer} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
