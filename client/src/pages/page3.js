import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Exerciselog from '../components/Exerciselog.js';

class Page3 extends Component {
    render() {
        const userId = this.props.match.params.user_id
        return (
            <div>
                <Navbar />
                <Exerciselog userId={userId} />
            </div>
        )
    }
} 

export default Page3;