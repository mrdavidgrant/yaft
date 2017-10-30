import React, { Component } from 'react';
import Login from '../components/Login.js';
import TitleBar from '../components/TitleBar.js';

class Page1 extends Component {
    render() {
        return (
            <div>
                <TitleBar />
                <Login/>
            </div>
        )
    }
}

export default Page1;