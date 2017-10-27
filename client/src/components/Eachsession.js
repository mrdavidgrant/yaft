import React, { Component } from 'react';
import ChartContainer from '../containers/ChartContainer.js'
import '../styles/Eachsession.css'



class Eachsession extends Component {
    render() {
        return (
            <main className="chartsContainer">
                <ChartContainer path={this.props.path} />
            </main>
        )
    }
}

export default Eachsession