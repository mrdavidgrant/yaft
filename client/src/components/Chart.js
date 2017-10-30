import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Legend from './Legend.js';
import "chartjs-plugin-annotation";

class Chart extends Component {
 
    render() {
        return (
            <div>
                <h2>Heartrate</h2>
                <Line 
                    width={40}
                    height={15} 
                    options={{
                        legend: {
                            display: false,
                        },
                        annotation: {
                            annotations: this.props.annotationsForHeartrate
                        },
                        maintainAspectRatio: true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 70,
                                    max: 120,
                                    stepSize: 5,
                                }
                            }]
                        }
                    }} 
                    data={this.props.heartRateData}
                />
                <Legend data={this.props.colorMap} />
                <h2>Calories</h2>
                <Line 
                    width={40}
                    height={15} 
                    options={{
                        legend: {
                            display: false,
                        },
                        annotation: {
                            annotations: this.props.annotationsForCalories
                        },
                        maintainAspectRatio: true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: 10,
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

