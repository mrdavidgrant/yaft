import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Logo from './Logo.js';


const style = {
  backgroundColor: '#EE773E',
  backgroundImage:'linear-gradient(to right, #EE773E, #FFAE4B)'
}
const titleStyle = {
  fontFamily: '"Orbitron", sans-serif',
  fontSize: '30px',
  lineHeight: '72px'
}

class TitleBar extends Component {
  render() {
        return (
          <AppBar
            style={style}
            title='FITLOG'
            titleStyle={titleStyle}
            iconElementLeft={<Logo />}
          />
        )
    }
  }

  export default TitleBar
