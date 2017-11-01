import React, { Component } from 'react'
import Calendar from '../components/Calendar.js';

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSessions: []
        }
    }

    componentWillMount() {
        fetch(`/api/v1/users/${this.props.userId}/activities`)
          .then(res => res.json())
          .then(value => {
            const userSessions = value.sessions.map(session => ({
                sessionId: session.id,
                start: session.started_at,
                end: session.completed_at,
                title: session.name || "Weights"
            }))
            this.setState({userSessions})
        })
    }

    render() {
        return (
            <Calendar userId={this.props.userId} userSessions={this.state.userSessions} />
        )
    }
}

export default CalendarContainer;