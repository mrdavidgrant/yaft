import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Eachsession from '../components/Eachsession.js';

class Page4 extends Component {
    componentWillMount(){
        console.log(this.props)
      }

    render() {
        const userId = this.props.match.params.user_id
        return (
            <div>
                <Navbar userId={userId}/>
                <Eachsession path={this.props.history.location.pathname} />
            </div>
        )
    }
}

export default Page4;