import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styles = {
    customWidth: {
      width: 150
    }
}

const suffixStyle = {
    position: 'absolute',
    top: '1300px',
    left: '200px',
    color: 'gray',
    fontWeight: 'lighter'
}

const buttonStyle = {
    marginTop: '10px',
    display: 'flex'
}

class LiftsetForm extends Component {

    state = {
        value: 1,
    }
    
    handleChange = (event, index, value) => this.setState({value});
    generateList = (inputField) => {
        let list = []
        if (inputField === 'Liftsets') {
            for(let i = 1; i <= 40; i++) {
                list.push(i)
            }
        } else if (inputField === 'Reps') {
            for(let i = 1; i <= 20; i++) {
                list.push(i)
            }
        } else {
            for(let i = 0; i <= 300; i+=10) {
                list.push(i)
            }
        }
        return list
    }

    render() {
        return (
            <div>
                <h4>3. SET NUMBERS </h4>
                <SelectField
                floatingLabelText="Liftsets"
                value={this.state.value}
                onChange={this.handleChange}
                >
                {this.generateList('Liftsets').map(item => <MenuItem value={item} primaryText={item.toString()} />)}
                </SelectField>
                <br />
                <SelectField
                floatingLabelText="Reps"
                value={this.state.value}
                onChange={this.handleChange}
                >
                {this.generateList('Reps').map(item => <MenuItem value={item} primaryText={item.toString()} />)}
                </SelectField>
                <br />
                <div>
                    <SelectField
                    floatingLabelText="Weight"
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    {this.generateList('Weights').map(item => <MenuItem value={item} primaryText={item.toString()} />)}
                    </SelectField>
                    <span style = {suffixStyle} className="suffix">kg</span> 
                </div>
                <RaisedButton 
                    label="Begin Workout" 
                    primary={false} 
                    backgroundColor='#EE773E' 
                    labelColor='#fff' 
                    style={buttonStyle}
                    href={`/users/24X947/sessions/1/start`}
                />
            </div>
        )
    }
} 

export default LiftsetForm;
