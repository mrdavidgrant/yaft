import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Complete from '../components/Complete.js';

class Page7 extends Component {
    componentWillMount(){
        console.log(this.props)
      }

        render() {

        const sessionId = this.props.match.params.session_id
        const userId = this.props.match.params.user_id
        return (
            <div>
                <Navbar userId={userId}/>
                <Complete sessionId = {sessionId} userId = {userId} />
            </div>
        )
    }
}

export default Page7;