import React, { Component } from 'react';
import Login from '../components/Login.js';
import Navbar from '../components/Navbar.js';

class Page1 extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <Login/>

            </div>
        )
    }
}

export default Page1;