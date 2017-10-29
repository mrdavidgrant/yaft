import React, { Component } from 'react';
import Chart from '../components/Chart.js';
import moment from 'moment';


class ChartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorMap: [],
            heartRateData: {
                label: [],
                datasets: []
            },
            caloriesData: {
                label: [],
                datasets: []
            },
            annotationsForHeartrate: [],
            annotationsForCalories: [],
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
            const heartrate = value.activity.heartrate
            const calories = value.activity.calories
            let motions = []
            value.liftsets.forEach((liftset, index) => {
                if(!motions.includes(liftset.motion)) {
                    motions.push(liftset.motion)
                }
            })

            const colorMap = motions.map((motion, index) => {
                const hue = Math.random() * 360
                const s = 50;
                const l = 80;
                return {
                    motion,
                    color: this.hslToHex(hue, s, l)
                }
            })

            const motionsStarted = value.liftsets.map(liftset => this.convertToMoment(liftset.started, 'HH:mm:ss'))
            const motionsStopped = value.liftsets.map(liftset => this.convertToMoment(liftset.stopped, 'HH:mm:ss'))
            
            const totalHeartrateValuesInSeconds = this.findValuesInSeconds(heartrate)
            const totalCalorieValuesInSeconds = this.findValuesInSeconds(calories)
            console.log(totalCalorieValuesInSeconds, totalHeartrateValuesInSeconds)
            const motionsIntervalInSeconds = 
                motionsStarted
                  .concat(...motionsStopped)
                  .map(interval => this.convertToSeconds(interval))
                  .sort((a, b) => a - b)
            console.log(motionsIntervalInSeconds)
            
            const heartrateValuesInSeconds = this.findClosest(motionsIntervalInSeconds, totalHeartrateValuesInSeconds)
            const calorieValuesInSeconds = this.findClosestForCalories(motionsIntervalInSeconds, totalCalorieValuesInSeconds)
            // real values
            // for labels
            const motionsInterval = motionsIntervalInSeconds.map(item => this.convertToTime(item))
            // for heartrate
            const heartrateValues = this.findValues(heartrate, heartrateValuesInSeconds)     
            // for calories
            const calorieValues = this.findValues(calories, calorieValuesInSeconds)

            // for annotation
            const annotationsForHeartrate = this.makeAnnotations('heartrate', value, colorMap)
            const annotationsForCalories = this.makeAnnotations('calories', value, colorMap)

            this.setState({
                colorMap,
                annotationsForHeartrate,
                annotationsForCalories,
                heartRateData: {
                    labels: motionsInterval, 
                    datasets: [
                        {
                            label: 'Time',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: '#7F7F7F',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#7F7F7F',
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
                    labels: motionsInterval, 
                    datasets: [
                        {
                            label: 'Time',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: '#7F7F7F',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#7F7F7F',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: calorieValues
                        }
                    ]
                }
            })
        })
    }

    makeAnnotations(category, value, colorMap) {
        return value.liftsets.map((set, i) => {
            const color = colorMap.find(motionColor => set.motion === motionColor.motion).color
            return {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xScaleID: `x-axis-0`,
                yScaleID: `y-axis-0`,
                xMin: this.convertToMoment(set.started, 'HH:mm:ss'),
                xMax: this.convertToMoment(set.stopped, 'HH:mm:ss'),
                yMin: category === 'heartrate' ? 70 : 0,
                yMax: category === 'heartrate' ? 120 : 10,
                backgroundColor: color,
                borderWidth: 0,
                onClick: function(e) {
                  console.log("Box", e.type, this);
                }
            }
        })
    }

    findValues(values, valuesInSeconds) {
        return values
                .filter(value => 
                  valuesInSeconds.indexOf(value.time) !== -1)
                .map(item => item.value)
    }

    findValuesInSeconds(values) {
        return values
                .map(value => value.time)
                .map(item => this.convertToSeconds(item))
    }

    findClosest(motions, values) {
        return motions
                .map((item) => values.reduce((pre, cur) => (Math.abs(cur - item) < Math.abs(pre - item) ? cur : pre)))
                .map(second => this.convertToTime(second))
    }

    findClosestForCalories(motions, values) {
        return motions
            .map((item, index) =>
                    values.filter((item, i) => i <= index).reduce((pre, cur) => (Math.abs(cur - item) < Math.abs(pre - item) ? cur : pre)))
            .map(second => this.convertToTime(second))
    }

    convertToSeconds(time) {
        return Number(time.split(":")[2]) + Number(time.split(":")[1]) * 60 + Number(time.split(":")[0]) * 3600
    }

    convertToTime(seconds) {
        let date = new Date(null)
        date.setSeconds(seconds)
        const result = date.toISOString().substr(11, 8)
        return result
    }

    convertToMoment(time, format) {
        return moment(time).format(format)
    }


    hslToHex(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) {
        r = g = b = l; // achromatic
        } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    render() {
        return (
            <div>
                <Chart
                    colorMap={this.state.colorMap}
                    annotationsForCalories={this.state.annotationsForCalories}
                    annotationsForHeartrate={this.state.annotationsForHeartrate}
                    heartRateData={this.state.heartRateData}
                    caloriesData={this.state.caloriesData}
                />
                
            </div>
        )
    }
}

export default ChartContainer;