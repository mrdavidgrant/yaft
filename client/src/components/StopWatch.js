import React, { Component } from 'react';
import moment from 'moment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '20px'
}

class StopWatch extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.time = null;
        this.intervalId = null;
        this.state.toggle = false;
        this.state.currentTime = "00:00:00"
      }

    componentDidMount() {
        this.initializeTime()
        // this.createInterval()
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
        if (this.state.toggle) {
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
        const toggleText = this.state.toggle
        ? "NEXT"
        : "REST";

      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="buttonContainer" style={buttonContainerStyle}>
                <FloatingActionButton className="floatingButton" onClick={(e) => {
                    this.props.onclick(); this.playTime()
                    }}>
                    <div style={{width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <p style={{fontSize: '20px', margin: '0'}}>{toggleText}</p>
                    </div>
                </FloatingActionButton>
            </div>
            <div>
              <h1 ref="time" className='p-5 m-0' id='time'>{this.state.currentTime}</h1>
            </div>
        </div>
        )
      }
    }

    export default StopWatch