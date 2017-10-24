import React, { Component } from 'react'
import Exerciselog from '../components/Exerciselog.js';

class ExerciseLogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Exerciselog: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:3000/api/v1/users/:user_id/activities/')
          .then(res => res.json())
          .then(value => {
              this.setState({Exerciselog: value.sessions})
          })
    }

    render() {
        return <Exerciselog Exerciselog={this.state.ExerciseLog} />
    }
}

export default ExerciseLogContainer