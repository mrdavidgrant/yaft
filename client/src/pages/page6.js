import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Template from '../components/Template.js';
import Motion from '../components/Motion.js';
import Equipment from '../components/Equipment.js';
import LiftsetForm from '../components/LiftsetForm.js';



class Page6 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Template/>
                <Motion/> 
                <Equipment/>
                <LiftsetForm/>
            </div>
        )
    }
} 

export default Page6;