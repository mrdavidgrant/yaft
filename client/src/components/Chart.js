import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['0', '10', '20', '30', '40', '50', '60'],
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
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }


// const chartContainerStyle = {
//     width: '65%',
//     height: '100vh',
//     margin: '0 auto',
//     backgroundColor: 'white',
//     fontSize: '10px',
//     fontFamily: 'Roboto, sans-serif'
// }

class Chart extends Component {
    render() {
        return (
            <div>
                <h2>Calories Burnt</h2>
                <Line data={data} />
            </div>

        )
    }
}

export default Chart



