import React, { Component } from 'react';
import Stepprocess from './Stepprocess.js';

class Startsession extends Component {
    render() {
      return (
          <div>
            <Stepprocess liftsets={this.props.liftsets} />
          </div>
      )
    }
}

export default Startsession;