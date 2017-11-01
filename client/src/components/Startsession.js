import React, { Component } from 'react';
import Stepprocess from './Stepprocess.js';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  marginTop: '10px',
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  width: '100%'
}

var liftsets = []

class Startsession extends Component {
  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }


  setTime(liftset, start, stop) {
    var time = new Date
    liftset.started = start.toJSON()
    liftset.stopped = stop.toJSON()
    liftsets.push(liftset)
  }

  handleSave() {
    var time = new Date
    fetch(`/api/v1/users/${this.props.userId}/activities/${this.props.sessionId}`)
      .then(res => res.json())
      .then(value => {
      value.activity.completed_at = time.toJSON()
      var data = {
        session: value.activity,
        liftsets: liftsets
      }
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <Stepprocess liftsets={this.props.liftsets} setTime = {this.setTime} />
        <RaisedButton
                label="End Workout"
                primary={false}
                backgroundColor='#EE773E'
                labelColor='#fff'
                style={buttonStyle}
                onClick={this.handleSave}
          />
      </div>
      )
    }
}

export default Startsession;