import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    this.state = {
      redirect: false
    }
  }


  setTime(liftset, start, stop) {
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
      var request = new Request(`/api/v1/users/${this.props.userId}/activities/${this.props.sessionId}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      })
      fetch(request)
        .then(res => {
          console.log(res)
          this.setState({redirect: true})
          // return <Redirect to = {`/users/${this.props.userId}/sessions/${this.props.sessionId}/complete`} />
        })

    })
  }

  render() {
    const {redirect} = this.state

    // if (redirect) {
    //   return <Redirect to = {`/users/${this.props.userId}/sessions/${this.props.sessionId}/complete`} />
    // }

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