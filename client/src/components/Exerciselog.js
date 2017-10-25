import React, { Component } from 'react';
import Calendar from './Calendar.js';


class Exerciselog extends Component {
    render() {
        return (
            <main className="sessionHistory">
                <Calendar />
            </main> 
        )
    }
  }

export default Exerciselog