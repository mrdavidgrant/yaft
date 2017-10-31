import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
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
              <div>
                <IconMenu
                  iconButtonElement={<IconButton><MenuIcon /></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                  <MenuItem primaryText="Profile" href={`/users/${this.props.userId}/`}/>
                  <MenuItem primaryText="Activity Log" href={`/users/${this.props.userId}/sessions/`}/>
                  <MenuItem primaryText="New Workout"  href={`/users/${this.props.userId}/sessions/pick/new`}/>
                </IconMenu>
              </div>
            }
          />
        )
    }
  }

  export default Navbar
