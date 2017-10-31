import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Startsession from '../components/Startsession.js';

class Page5 extends Component {
    componentWillMount(){
        console.log(this.props)
      }

    render() {
        const userId = this.props.match.params.user_id
        console.log(this.props)
        return (
            <div>
                <Navbar userId={userId}/>
                <Startsession liftsets={this.props.location.state} />
            </div>
        )
    }
}

export default Page5;