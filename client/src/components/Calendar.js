import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import CustomEvent from './CustomEvent.js';

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

  handleEventClick = (event, target) => {
    let obj = target.currentTarget;
    console.log(obj)
  }

  render() {
    const myEventsList = [
      {
      'title': 'Leg Day',
      'allDay': true,
      'start': moment('2017-10-01'),
      'end': moment('2017-10-01')
      },
      {
        'title': 'Marathon',
        'start': moment('2017-10-11'),
        'end': moment('2017-10-11')
      }
    ]
    return (
          <div style={style}>
            <div style={calendarContainerStyle}>
              <BigCalendar
                  selectable
                  {...this.props}
                  events={myEventsList}
                  views={views}
                  onSelectEvent={this.handleEventClick}
           
              />
            </div>
            <RaisedButton 
              label="Start New Workout" 
              primary={false} 
              backgroundColor='#EE773E' 
              labelColor='#fff' 
              style={buttonStyle} 
            />
          </div>
    )
  }
}

export default Calendar;