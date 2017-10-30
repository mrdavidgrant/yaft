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
        const { data, handleChange, handleSave } = this.props
        return (
            <div>
                <h4>3. SET NUMBERS </h4>
                <SelectField
                    floatingLabelText="Reps"
                    value={data.reps}
                    onChange={(event, index, value) => {handleChange(event, index, value, 'reps')}}
                >
                {this.generateList('Reps').map((item, i) => <MenuItem key={i} value={item} primaryText={item.toString()} />)}
                </SelectField>
                <br />
                    <SelectField
                        floatingLabelText="Weight"
                        value={data.weight}
                        onChange={(event, index, value) => {handleChange(event, index, value, 'weight')}}
                    >
                    {this.generateList('Weights').map((item, i) => <MenuItem key={i} value={item} primaryText={item.toString()} />)}
                    </SelectField>
                <RaisedButton 
                    label="Save" 
                    primary={false} 
                    backgroundColor='#EE773E' 
                    labelColor='#fff' 
                    style={buttonStyle}
                    onClick={() => handleSave()}
                />
            </div>
        )
    }
} 

export default LiftsetForm;
