import React, { Component } from 'react';
import moment from 'moment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    width: '100px',
    height: '100px',
  }
  
  const buttonContainerStyle = {
    width: '50%',
    display: 'flex',
    justifyContent: 'center'
  }

class StopWatch extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.time = null;
        this.intervalId = null;
        this.state.toggle = false;
        this.state.currentTime = "00:00:00"
      }

    componentDidMount() {
        this.initializeTime()
        this.createInterval()
      }
    
      initializeTime = () => {
        this.time = 0;
        this.setState({
          currentTime: this.formatTime(this.getTime())
        })
      }
    
      createInterval() {
        this.intervalId = setInterval(this.updateTime, 100);
      }
    
      clearInterval() {
        clearInterval(this.intervalId)
      }
    
      updateTime = () => {
        this.time += 100
        const newTime = this.getTime();
        const formattedTime = this.formatTime(newTime);
    
        this.setState({currentTime: formattedTime})
      }
    
      formatTime = (momentJsObject) => {
        return momentJsObject.format("HH:mm:ss")
      }
    
      getTime = () => {
        return moment.utc(this.time)
      }

      playTime = () => {
        if (!this.state.toggle) {
          this.pauseTime()
        } else {
          this.startTime()
        }
      }
    
      startTime() {
        this.createInterval()
        this.toggle()
      }
    
      pauseTime = () => {
        this.clearInterval()
        this.toggle()
      }
    
      resetTime = () => {
        this.initializeTime()
        this.clearInterval()
        this.setState({toggle: false})
      }
    
      toggle = () => {
        this.setState({
          toggle: !this.state.toggle
        })
      }
    
      render(){

        var toggleText = !this.state.toggle
        ? "STOP"
        : "START";
  
      return (
        <div className="mdl-cell mdl-cell--12-col">
          <div>
            <div className="mdl-card__title--expand">
              <h1 ref="time" className='p-5 m-0' id='time'>{this.state.currentTime}</h1>
            </div>

            <div className="buttonContainer" style={buttonContainerStyle}>
                <FloatingActionButton className="floatingButton" secondary={false} style={buttonStyle} onClick={this.playTime}>
                  {toggleText}    
                </FloatingActionButton>
            </div>

            <RaisedButton label="RESET" primary={false} backgroundColor='#EE773E' labelColor='#fff' onClick={this.resetTime} />
            </div>
            
          </div>
        )
      }
    }
    
    export default StopWatch