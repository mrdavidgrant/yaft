import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page3 from '../pages/page3.js';
import Page4 from '../pages/page4.js';
import Page5 from '../pages/page5.js';
import Page6 from '../pages/page6.js';
import Page7 from '../pages/page7.js';

const style ={
    height: '100%'
}

class Sessions extends Component {
    render() {
        return (
            <Router>
                <div style={style} className="sessions">
                    <Route exact path='/users/:user_id/sessions' component={Page3} />
                    <Route exact path='/users/:user_id/sessions/:session_id' component={Page4} />
                    <Route exact path='/users/:user_id/sessions/:session_id/start' component={Page5}/>
                    <Route exact path='/users/:user_id/sessions/pick/new' component={Page6} />
                    <Route exact path='/users/:user_id/sessions/:session_id/complete' component={Page7} />
                </div>
            </Router>
        )
    }
}

export default Sessions;