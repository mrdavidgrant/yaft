import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import '../styles/Profile.css'
import AvatarImage from './AvatarImage.js';

const datePickerStyle = {
  backgroundColor: '#FFF'
}

const buttonStyle = {
  marginTop: '10px',
  display: 'flex'
}

const editProfileButtonStyle = {
  width: '120px',
  paddingTop: '5px'
}

const raiseButtonStyle = {
  height: '25px',
  fontSize: '12px',
  marginBottom: '0',
  position: 'absolute',
  right: '100px',
  top: '0'
}

const img = require('../images/avatar.png')

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }
  
  handleChange = (event, index, value) => this.setState({value});
  
  render() {
    const {user} = this.props
    const userInfo = {
      firstName: user.first_name ? user.first_name : 'First Name',
      lastName: user.last_name ? user.last_name : 'Last Name',
      userName: user.display_name ? user.display_name : 'Username',
      dOfB: user.dob ? user.dob : 'Date of Birth',
      gender: user.gender ? user.gender : 'Gender',
      height: user.height_cm ? user.height_cm : 'Height',
      weight: user.weight_kg ? user.weight_kg : 'Weight',
      img: user.avatar ? user.avatar : img

    }

    return (
        <div className="profileContainer">
          <h1 className="profile"> Profile </h1>
          <div className="inputFields">
            <div className="topContainer">
                <div className="topLeftContainer">
                  <TextField
                    floatingLabelText={userInfo.firstName}
                    style={{marginRight: '30px'}}
                    disabled
                  /> <br />
                  <TextField
                    floatingLabelText={userInfo.lastName}
                  /><br />
                  <TextField
                    floatingLabelText={userInfo.userName}
                  /><br />
                </div>

                <div className="topRightContainer">
                  <List className="avatarContainer">
                    <ListItem
                      disabled={true}
                      rightAvatar={
                        <Avatar size={130} icon={<AvatarImage img={userInfo.img} />} />
                      }
                    />
                  </List>
                  <RaisedButton 
                      label="Edit Profile" 
                      primary={false} 
                      backgroundColor='#EE773E' 
                      labelColor='#fff' 
                      buttonStyle={editProfileButtonStyle}
                      style={raiseButtonStyle}
                  />
                </div>
            </div>

            <div className="bottomContainer">
              <DatePicker
                  dialogContainerStyle={datePickerStyle}
                  hintText={userInfo.dOfB}
                  openToYearSelection={true}
              /><br/>
              <SelectField
                value={this.state.value}
                onChange={this.handleChange}
              >
                <MenuItem value={1} primaryText="Gender"/>
                <MenuItem value={2} primaryText="Male" />
                <MenuItem value={3} primaryText="Female" />
              </SelectField> <br />
              <div className="height">
              <TextField
                floatingLabelText={userInfo.height}
                style={{marginRight: '30px'}}
              />
              <span className="suffix">cm</span> 
              </div>
              <div className="weight">
                <TextField
                  floatingLabelText={userInfo.weight}
                />
                <span className="suffix">kg</span> 
              </div>
              <br />
            </div>
          </div>

          <RaisedButton 
              label="Start New Workout" 
              primary={false} 
              backgroundColor='#EE773E' 
              labelColor='#fff' 
              style={buttonStyle} 
          />
      </div>
    )
  }
}
export default Profile

/* {!_.isEmpty(this.props.user) &&  */