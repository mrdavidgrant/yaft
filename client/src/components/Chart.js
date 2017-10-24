import React, { Component } from 'react';
import {LineChart, AreaChart, Area, Line, XAxis, Label, Tooltip, CartesianGrid, YAxis, Legend, ComposedChart, Bar} from 'recharts'


const data = [
    { name: '0', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: '10', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: '20', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: '30', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: '40', uv: 278, pv: 5000, amt: 2400, uvError: 28 },
    { name: '50', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: '60', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: '70', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: '80', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: '90', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];


const data1 = [
    {name: '0', uv: 4000, pv: 2400, amt: 2400},
    {name: '10', uv: 3000, pv: 1398, amt: 2210},
    {name: '20', uv: 2000, pv: 9800, amt: 2290},
    {name: '30', uv: 2780, pv: 3908, amt: 2000},
    {name: '40', uv: 1890, pv: 4800, amt: 2181},
    {name: '50', uv: 2390, pv: 3800, amt: 2500},
    {name: '60', uv: 3490, pv: 4300, amt: 2100},
];


const chartContainerStyle = {
    width: '65%',
    height: '100vh',
    margin: '0 auto',
    backgroundColor: 'white',
    fontSize: '10px',
    fontFamily: 'Roboto, sans-serif'
}

class Chart extends Component {
    render() {
        return (
        <div className="chartContainer" style={chartContainerStyle}>
            <h3> Heart Rate </h3>
            <LineChart
                width={700}
                height={300}
                data={data}
                margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" >
                <Label margin={{top: 10}} value="Time in minutes"/>
                </XAxis>
                <YAxis type="number" unit="%">
                <Label value="Heartbeat/Minute" position="insideLeft" angle={90} />
                </YAxis>
                <Tooltip/>
                <Line type="monotone" dataKey="uv" stroke="#ff7300"  />
                <Line type="monotone" dataKey="pv" stroke="#387908" />
            </LineChart>

            <h3> Calories </h3>
            <AreaChart width={720} height={300} data={data1}
                 margin={{top: 40, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name" >
                <Label margin={{top: 10}} value="Time in minutes"/>
                </XAxis>
                <YAxis type="number" unit="%">
                <Label value="Calories/Hour" position="insideLeft" angle={90} />
                </YAxis>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>

            <ComposedChart width={700} height={300} data={data1}
                margin={{top: 40, right: 30, bottom: 5, left: 20}}>
                <XAxis dataKey="name" label="Duration"/>
                <YAxis label="Index"/>
                <Tooltip/>
                <Legend/>
                <CartesianGrid stroke='#f5f5f5'/>
                <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
                <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
                <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
            </ComposedChart>

        </div>
        )
    }
}

export default Chart



