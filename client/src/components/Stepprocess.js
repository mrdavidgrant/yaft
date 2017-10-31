import React, { Component } from 'react';
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import '../styles/Stepprocess.css';



const style = {
  height: '100vh'
}


class Stepprocess extends Component {
    state = {
        stepIndex: 0,
      };
    
      handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
          this.setState({stepIndex: stepIndex + 1});
        }
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };

    renderStepActions (step) {
        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                label="Next"
                disableTouchRipple={true}
                disableFocusRipple={true}
                primary={true}
                onClick={this.handleNext}
                style={{marginRight: 12}}
                />
                {step > 0 && (
                <FlatButton
                    label="Back"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    onClick={this.handlePrev}
                />
                )}
            </div>

        )
    }

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
                  <Step>
                    <StepButton onClick={() => this.setState({stepIndex: 0})}>
                      Bench Press
                    </StepButton>
                    <StepContent>
                      <p>5 sets, 3 reps, bench press, 65lbs </p>
                      {this.renderStepActions(0)}
                    </StepContent>
                  </Step>
                  <Step>
                    <StepButton onClick={() => this.setState({stepIndex: 1})}>
                      Jog 
                    </StepButton>
                    <StepContent>
                      <p>8km jog with 6% incline </p>
                      {this.renderStepActions(1)}
                    </StepContent>
                  </Step>
                  <Step>
                    <StepButton onClick={() => this.setState({stepIndex: 2})}>
                      Spin
                    </StepButton>
                    <StepContent>
                      <p>Level 1 - 12 spin session</p>
                      {this.renderStepActions(2)}
                    </StepContent>
                  </Step>
                </Stepper>
              </div>
            </div>
        );
    }
}

export default Stepprocess;




