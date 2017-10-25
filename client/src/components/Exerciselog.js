import React, { Component } from 'react';
import CalendarContainer from '../containers/CalendarContainer.js';



class Exerciselog extends Component {
    render() {
        return (
            <main className="sessionHistory">
                <CalendarContainer userId={this.props.userId} />
            </main> 
        )
    }
  }

export default Exerciselog