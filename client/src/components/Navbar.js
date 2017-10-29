import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
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

class Navbar extends Component {
    render() {
      return (
        <AppBar
          style={style}
          title='FITLOG'
          titleStyle={titleStyle}
          iconElementLeft={<Logo />}
          iconElementRight={
            <IconButton tooltip="SVG Icon">
              <MenuIcon />
            </IconButton>
          }
        />
      )
    }
  }

  export default Navbar
