import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import ProfileContainer from '../containers/ProfileContainer.js';

class Page2 extends Component {
    render() {
        const userId = this.props.match.params.user_id
        return (
            <div>
                <Navbar />
                <ProfileContainer userId={userId} />
            </div>
        )
    }
} 

export default Page2;