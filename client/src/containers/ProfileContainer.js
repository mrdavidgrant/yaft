import React, { Component } from 'react'
import Profile from '../components/Profile.js';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        fetch(`/api/v1/users/${this.props.userId}`)
          .then(res => res.json())
          .then(value => {
              this.setState({user: value.user})
          })
    }

    render() {    
        console.log(this.state) 
        return <Profile user={this.state.user} />
    }
}

export default ProfileContainer