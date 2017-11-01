import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Startsession from '../components/Startsession.js';

class Page5 extends Component {
    componentWillMount(){
        console.log(this.props)
      }

        render() {

        const sessionId = this.props.match.params.session_id
        const userId = this.props.match.params.user_id
        return (
            <div>
                <Navbar userId={userId}/>
                <Startsession liftsets= {this.props.location.state} sessionId = {sessionId} userId = {userId}
                />
            </div>
        )
    }
}

export default Page5;