import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Eachsession from '../components/Eachsession.js';

class Page4 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Eachsession path={this.props.history.location.pathname} />
            </div>
        )
    }
} 

export default Page4;