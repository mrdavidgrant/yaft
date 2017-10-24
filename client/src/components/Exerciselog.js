import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Calendar from './Calendar.js';


class Exerciselog extends Component {
    render() {
        const { params } = (this.props);
        return (
            <main className="sessionHistory">
                <Calendar />
            </main> 
        )
    }
  }

export default Exerciselog

/* <h1> All activity for user ({params.user_id})</h1>  */