import React, { Component } from 'react'

const img = require('../images/Fitbit_logo_reversed_RGB.png')

class Login extends Component {
  render () {
    return (
      <div className="loginform">
        <form action="https://yaft.herokuapp.com/login" method="get">
          <button type="submit" className="loginbutton"><span>LOGIN WITH </span><img src={img} height="25px" /> </button>
          </form>
      </div>
    )
  }
}

export default Login