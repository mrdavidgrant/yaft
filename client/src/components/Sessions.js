import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Exerciselog from '../components/Exerciselog.js';
import Eachsession from '../components/Eachsession.js';
import Startsession from '../components/Startsession.js';


const Sessions = () => {
    <Router>
        <Route exact path='/users/:user_id/sessions' component={Exerciselog} />
        <Route exact path='/users/:user_id/sessions/:session_id' component={Eachsession} />
        <Route path='/users/:user_id/sessions/:session_id/new' component={Startsession} /> 
    </Router>
}

export default Sessions;