import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const img = require('../images/Fitbit_logo_RGB.png')

const buttonStyle = {
  marginTop: '10px',
  display: 'flex'
}

class Complete extends Component {
  render () {
    return (
      <div className="complete">
        <h2>Awesome job!</h2>
        <p>Please sync your</p>
        <img src={img} width='80%' />
        <p>and click "Next" to continue...</p>

        <RaisedButton
                    label="Next"
                    primary={false}
                    backgroundColor='#EE773E'
                    labelColor='#fff'
                    style={buttonStyle}
                    href={`/users/${this.props.userId}/sessions/${this.props.sessionId}`}
                />
      </div>
    )
  }
}

export default Complete