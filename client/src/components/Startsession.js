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

class Startsession extends Component {
    render() {
      return (
          <div>
            <Stepprocess liftsets={this.props.liftsets} />
            <RaisedButton
                    label="End Workout"
                    primary={false}
                    backgroundColor='#EE773E'
                    labelColor='#fff'
                    style={buttonStyle}
                    onClick={this.handleClick}
                />
          </div>
      )
    }
}

export default Startsession;