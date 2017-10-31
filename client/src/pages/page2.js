import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import ProfileContainer from '../containers/ProfileContainer.js';

const style ={
    backgroundColor: 'gray',
    height: '100%'
}

class Page2 extends Component {
    render() {
        const userId = this.props.match.params.user_id
        return (
            <div style={style}>
                <Navbar userId={userId}/>
                <ProfileContainer userId={userId} />
            </div>
        )
    }
}

export default Page2;