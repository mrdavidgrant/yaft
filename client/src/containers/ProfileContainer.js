import React, { Component } from 'react'
import Profile from '../components/Profile.js';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulldogs: []
        }
    }

    componentWillMount() {
        fetch('https://dog.ceo/api/breeds/list/al')
          .then(res => res.json())
          .then(value => {
              this.setState({bulldogs: value.message.bulldog})
          })
    }

    render() {
        return <Profile user={this.state.bulldogs} />
    }
}

export default ProfileContainer