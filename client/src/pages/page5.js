import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Startsession from '../components/Startsession.js';

class Page5 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar/>
                <Startsession liftsets={this.props.location.state} />
            </div>
        )
    }
} 

export default Page5;