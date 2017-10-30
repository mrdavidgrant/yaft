import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import { Route } from 'react-router-dom'
//import CustomEvent from './CustomEvent.js';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/Calendar.css'

BigCalendar.momentLocalizer(moment);

const views={
  month: true,
  week: true
}

const style = {
  width: '70%',
  margin: '0 auto',
  fontFamily: '"Roboto", sans-serif',
  paddingTop: '50px',
  backgroundColor: '#fff'
}

const calendarContainerStyle = {
  height: '500px'
}

const buttonStyle = {
  marginTop: '10px',
  display: 'flex'
}

class Calendar extends Component {

  render() {
    return (
      <Route render={({ history}) => (
          <div style={style}>
            <div style={calendarContainerStyle}>
              <BigCalendar
                  selectable
                  {...this.props}
                  events={this.props.userSessions}
                  views={views}
                  onSelectEvent={({sessionId}) => {
                    history.push(`/users/${this.props.userId}/sessions/${sessionId}`);
                  }}
              />
            </div>
            <RaisedButton 
              label="Start New Workout" 
              primary={false} 
              backgroundColor='#EE773E' 
              labelColor='#fff' 
              style={buttonStyle} 
              href={`/users/${this.props.userId}/sessions/pick/new`}
            />
          </div>
        )} />
    );

  }
}

export default Calendar;
