import React, { Component } from 'react'
import Calendar from '../components/Calendar.js';

class CalendarContainer extends Component {
    componentWillMount() {
        fetch(`/api/v1/users/${this.props.userId}/activities`).then(res => res.json()).then(value => {
            console.log('value', value.sessions)
        })
    }

    render() {
        const events = 'jihihi'
        return (
            <Calendar />
        )
    }
}

export default CalendarContainer;