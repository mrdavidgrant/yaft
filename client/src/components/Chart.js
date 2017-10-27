import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {
    render() {
        return (
            <div>
                <h2>Heartrate</h2>
                <Line 
                    width={40} height={15} 
                      options={{
                      maintainAspectRatio: false,
                      scales: {
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                min: 70,
                                max: 95,
                                stepSize: 1,
                            }
                        }]
                      }
                    }} 
                data={this.props.heartRateData} 
                />
                <h2>Calories</h2>
                <Line 
                    width={40}
                    height={0} 
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                stacked: true,
                                ticks: {
                                    min: 0,
                                    max: 3,
                                    stepSize: 1,
                                }
                            }]
                          }
                    }} 
                    data={this.props.caloriesData} 
                />
            </div>

        )
    }
}

export default Chart



