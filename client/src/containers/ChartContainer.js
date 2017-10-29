import React, { Component } from 'react'
import Chart from '../components/Chart.js';

class ChartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heartRateData: {
                label: [],
                datasets: []
            },
            caloriesData: {
                label: [],
                datasets: []
            }
        }
    }

    componentWillMount() {
        const path = this.props.path.split('/').map(name => {
            if(name === 'sessions') {
              return 'activities'
            }
            return name
          }).join('/')
        
        fetch(`/api/v1/${path}`)
          .then(res => res.json())
          .then(value => {
            const heartrateTimeInSeconds = value.activity.heartrate.map(heartrate => 
                Number(heartrate.time.split(":")[2])
                + Number(heartrate.time.split(":")[1]) * 60
                + Number(heartrate.time.split(":")[0]) * 3600
            ).sort((a, b) => a - b)
            
            const heartrateHightestNum = heartrateTimeInSeconds[heartrateTimeInSeconds.length-1]
            const heartrateLowestNum = heartrateTimeInSeconds[0]
            const heartrateRange = heartrateHightestNum - heartrateLowestNum
            const heartrateIntervals = ['0']
            for(let i = 1; i <= 10; i++) {
                heartrateIntervals.push(this.convertToTime(Math.round(heartrateRange/10 * i)))
            }

            // for heartrate
            const heartrateValues = value.activity.heartrate.map(heartrate => heartrate.value)

            const caloriesTimeInSeconds = value.activity.calories.map(calorie => 
                Number(calorie.time.split(":")[2])
                + Number(calorie.time.split(":")[1]) * 60
                + Number(calorie.time.split(":")[0]) * 3600
            ).sort((a, b) => a - b)

            const caloriesHighestNum = caloriesTimeInSeconds[caloriesTimeInSeconds.length-1]
            const caloriesLowestNum = caloriesTimeInSeconds[0]
            const caloriesRange = caloriesHighestNum - caloriesLowestNum
            const caloriesIntervals = ['0']
            for(let i = 1; i <= 10; i++) {
                caloriesIntervals.push(this.convertToTime(Math.round(caloriesRange/10 * i)))
            }

            // for calories
            const caloriesValues = value.activity.calories.map(calorie => calorie.value)

            this.setState({
                heartRateData: {
                    labels: heartrateIntervals, 
                    datasets: [
                        {
                            label: 'Time',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: heartrateValues
                        }
                    ]
                },
            

                caloriesData: {
                    labels: caloriesIntervals, 
                    datasets: [
                        {
                            label: 'Time',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: caloriesValues
                        }
                    ]
                }
            })

        })
    }

    convertToTime(seconds) {
        let date = new Date(null)
        date.setSeconds(seconds)
        const result = date.toISOString().substr(11, 8)
        return result
    }

    render() {
        return (
            <Chart heartRateData={this.state.heartRateData} caloriesData={this.state.caloriesData} />
        )
    }
}

export default ChartContainer;