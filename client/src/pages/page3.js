import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Exerciselog from '../components/Exerciselog.js';

class Page3 extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Exerciselog  />
            </div>
        )
    }
} 

export default Page3;