import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import '../styles/Profile.css'
import AvatarImage from './AvatarImage.js';
import _ from 'lodash';

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



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
}


   
  handleChange = (event, index, value) => this.setState({value});
  
  render() {
    console.log(this.props.user)

    return (
        <div className="profileContainer">
          <h1 className="profile"> Profile </h1>
          <div className="inputFields">
            <div className="topContainer">
                <div className="topLeftContainer">
                  <TextField
                  floatingLabelText="First Name"
                  style={{marginRight: '30px'}}
                  /> <br />
                  <TextField
                    floatingLabelText="Last Name"
                  /><br />
                  <TextField
                    floatingLabelText="Username"
                  /><br />
                </div>

                <div className="topRightContainer">
                  <List className="avatarContainer">
                    <ListItem
                      disabled={true}
                      rightAvatar={
                        <Avatar size={130} icon={<AvatarImage/>} />
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
              <TextField
                floatingLabelText="E-mail"
                style={{marginRight: '30px'}}
              />
              <TextField
                floatingLabelText="Password"
                type="password"
              /><br />
              <DatePicker
                  dialogContainerStyle={datePickerStyle}
                  hintText="Date of Birth"
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
                floatingLabelText="Height"
                style={{marginRight: '30px'}}
              />
              <span className="suffix">cm</span> 
              </div>
              <div className="weight">
                <TextField
                  floatingLabelText="Weight"
                />
                <span className="suffix">lbs</span> 
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