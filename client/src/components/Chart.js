import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {
    render() {
        return (
            <div>
                <h2>Heartrate</h2>
                <Line width={40} height={15} 
                options={{maintainAspectRatio: false}} 
                data={this.props.heartRateData} 
                />
                <h2>Calories</h2>
                <Line 
                    width={40}
                    height={5} 
                    options={{maintainAspectRatio: false}} 
                    data={this.props.caloriesData} 
                />
            </div>

        )
    }
}

export default Chart



