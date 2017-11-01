import React, { Component } from 'react';
import {Step, StepLabel, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import StopWatch from './StopWatch.js';
import '../styles/Stepprocess.css';

const style = {
  // height: '100vh'
}


class Stepprocess extends Component {
  constructor(props){
    super(props);
    this.state ={
      stepIndex: 0,
      click: 1,
      start: new Date,
      stop: new Date
    }
    this.handleNext = this.handleNext.bind(this)
  }

  handleNext = (liftset) => () => {
    const { stepIndex, click } = this.state
    if (click % 2 === 0) {
      this.setState({start: new Date})
      this.props.setTime(liftset, this.state.start, this.state.stop)
    } else {
      this.setState({stop: new Date})
    }
    if(click === 0) {
      this.setState({click: click + 2})
      return;
    }
    setTimeout(() => {
      this.setState({
        click: click + 1,
        stepIndex: click % 2 === 0 ? stepIndex + 1 : stepIndex,
      })

    }, 1000)
  };

  render() {
    const {stepIndex} = this.state;

    return (
      <div className="stepContainer" style={style}>
        <div style={{maxWidth: 400, maxHeight: 400, margin: 'auto'}}>
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
          >
          {this.props.liftsets.map(liftset => <Step>
              <StepLabel>
                  {liftset.motion}
              </StepLabel>
              <StepContent>
                  <div>Reps: {liftset.reps}, Weight: {liftset.weight}</div>
                  <StopWatch onclick={this.handleNext(liftset)} />
                </StepContent>
            </Step>)}
          </Stepper>
        </div>
      </div>
    );
  }
}

export default Stepprocess;




