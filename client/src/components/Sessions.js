import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page3 from '../pages/page3.js';
import Page4 from '../pages/page4.js';
import Page5 from '../pages/page5.js';

class Sessions extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/users/:user_id/sessions' component={Page3} />
                    <Route exact path='/users/:user_id/sessions/:session_id' component={Page4} />
                    <Route path='/users/:user_id/sessions/:session_id/new' component={Page5} /> 
                </div>
            </Router>
        )
    }   
}

export default Sessions;