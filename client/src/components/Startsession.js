import React, { Component } from 'react';
import Stepprocess from './Stepprocess.js';
import StopWatch from './StopWatch.js';

class Startsession extends Component {
    render() {
      return (
          <div>
          <Stepprocess />
          <StopWatch />
          </div>
      )
    }
}

export default Startsession;