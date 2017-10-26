import React, { Component } from 'react';
import Chart from './Chart.js'
import '../styles/Eachsession.css'



class Eachsession extends Component {
    render() {
        return (
            <main className="chartsContainer">
                <Chart/>
            </main>
        )
    }
}

export default Eachsession