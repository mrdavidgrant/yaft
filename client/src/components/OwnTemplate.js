import React, { Component } from 'react';
import Motion from '../components/Motion.js';
import BodyPart from '../components/BodyPart.js';
import LiftsetForm from '../components/LiftsetForm.js';

class OwnTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {
            bodySelected: this.props.bodyChecked,
            motionSelected: this.props.motionChecked,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.bodyChecked !== nextProps.bodyChecked || this.props.motionChecked !== nextProps.motionChecked) {
            this.setState({
                bodySelected: nextProps.bodyChecked,
                motionSelected: nextProps.motionChecked
            })
        }
    }

    render() {
        const {
            bodyParts,
            bodyState,
            handleBodyCheck,
            handleMotionCheck,
            motionState,
            partSelected,
            motionNames,
            motions,
            handleLiftsetChange,
            liftSetData,
            handleSave
        } = this.props
        const {bodySelected, motionSelected} = this.state
        return (
            <div>
                <BodyPart
                    bodyParts={bodyParts}
                    bodyState={bodyState}
                    handleCheck={handleBodyCheck}
                />
                {bodySelected && <Motion motionState={motionState} handleMotionCheck={handleMotionCheck} partSelected={partSelected} motionNames={motionNames} data={motions} />}
                {bodySelected && motionSelected && <LiftsetForm handleSave={handleSave} data={liftSetData} handleChange={handleLiftsetChange} />}
            </div>
        )
    }
} 

export default OwnTemplate;