import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from '../components/Navbar.js';
import Template from '../components/Template.js';
import OwnTemplate from '../components/OwnTemplate.js';
import TemplateDetails from '../components/TemplateDetails.js';

const img = require('../images/fit.png')
const buttonStyle = {
    marginTop: '10px',
    display: 'flex'
}
class Page6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            sessionId: 0,
            path: '',
            templates: [],
            tile: { 
                index: -1,
                checked: false
            },
            body: {
                index: -1,
                checked: false,
                name: ''
            },
            motion: {
                index: -1,
                checked: false,
                name: ''
            },
            set: 1,
            reps: 1,
            weight: 0,
            templateDetails: {},
            motions: [],
            motionslist: [],
            activities: []
        }
        this.bodyParts = [
            {
              img,
              title: 'chest'
            },
            {
              img,
              title: 'back'
            },
            {
                img,
                title: 'legs'
            },
            {
                img,
                title: 'arms'
            },
            {
                img,
                title: 'shoulders'
            },
            {
                img,
                title: 'core'
            }
        ]
    }

    componentDidMount() {
        const path = this.props.location.pathname.split('/').map((item, i) => {
            if(item === 'sessions') {
                return 'templates'
            }
            if(i >= 3) {
                return ' '
            }
            return item
        }).filter(item => item !== ' ').join('/')

        fetch(`/api/v1/${path}`)
            .then(res => res.json())
            .then(value => {
                this.setState({
                    path,
                    templates: value.templates
                })
            })
            .catch(e => {console.log(e)})
        
        fetch('/api/v1/motions')
            .then(res => res.json())
            .then(value => {
                this.setState({
                    motions: value.motions,
                    motionslist: value.motions.map(motion => motion.name)
                })
            })
    }

    handleCheck = (event, isInputChecked, i, template_id) => {
        fetch(`/api/v1/${this.state.path}/${template_id}`)
          .then(res => res.json())
          .then(value => this.setState({templateDetails: value}))
          .catch(e => console.log(e))

        this.setState({
            tile: {
                index: i,
                checked: isInputChecked
            }
        })
    }

    handleBodyCheck = (event, isInputChecked, i) => {
        this.setState({
            body: {
                index: i,
                checked: isInputChecked,
                name: this.bodyParts[i].title
            }
        })
    }

    handleMotionCheck = (event, isInputChecked, i, name) => {
        this.setState({
            motion: {
                index: i,
                checked: isInputChecked,
                name,
            }
        })
    }

    handleLiftsetChange = (event, index, value, field) => {
        if(field === 'set') {
            this.setState({set: value})
        }
        if(field === 'reps') {
            this.setState({reps: value})
        }
        if(field === 'weight') {
            this.setState({weight: value})
        }  
    };

    handleSave = () => {
        
        const activity = {
            reps: this.state.reps,
            weight: this.state.weight,
            motion: this.state.motion.name,
            rest: 0,
            started: "2017-08-28T14:30:47.000-04:00",
            stopped: "2017-08-28T14:30:47.000-04:00",
            motion_id: 1,
            equipment_id: 2,
            equipment: "Barbell"
        }
        const activities = this.state.activities.concat(activity)
        this.setState({
            activities,
            tile: { 
                index: -1,
                checked: false
            },
            body: {
                index: -1,
                checked: false,
                name: ''
            },
            motion: {
                index: -1,
                checked: false,
                name: ''
            },
            reps: 1,
            weight: 0
        })
    }
       

    handleClick = (e) => {
        const path = this.state.path.split('/').map(section => section === 'templates' ? 'activities' : section).join('/')
        const url = `/api/v1${path}`

        if(this.state.tile.checked) {
            const templateData = {
                session: {name: 'weights'},
                liftsets: this.state.templateDetails.liftsets
            }
            return fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(templateData)
            }).then(res => res.json()).then(value => this.setState({redirect: true, sessionId: value.activity.id}))
            .catch(e => console.log(e))
        }

        const data = {
             session: {name: "weights"},
             liftsets: this.state.activities
         }

        const dataStringified = JSON.stringify(data)
        let fetchData = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }

        fetch(url, fetchData)
          .then(res => res.json())
          .then(value => this.setState({redirect: true, sessionId: value.activity.id}))
          .catch(e => console.log(e))

    }

    render() {
        if(this.state.redirect) {
            const sessionId = this.state.sessionId
            const path = this.props.location.pathname.split('/').map(item => {
                if(item === 'pick'){
                    return sessionId
                }
                if(item === 'new') {
                    return 'start'
                }
                return item
            }).join('/')
            
            return <Redirect to={{pathname: path, state: this.state.tile.checked ? this.state.templateDetails.liftsets : this.state.activities}} />
        }

        const { set, reps, weight, templates, tile, templateDetails, body, motion, motions, motionslist } = this.state;
        const liftSetData = {
            set,
            reps,
            weight
        }
        return (
            <div>
                <Navbar />
                {!body.checked && <Template templates={templates} handleCheck={this.handleCheck} tileState={tile} />}
                {!tile.checked && <OwnTemplate
                                        bodyChecked={body.checked}
                                        motionChecked={motion.checked}
                                        bodyParts={this.bodyParts}
                                        motionNames={motionslist}
                                        motions={motions}
                                        partSelected={body.name} 
                                        handleBodyCheck={this.handleBodyCheck}
                                        handleMotionCheck={this.handleMotionCheck}
                                        motionState={motion}
                                        bodyState={body}
                                        handleLiftsetChange={this.handleLiftsetChange}
                                        liftSetData={liftSetData}
                                        handleSave={this.handleSave}
                                  />
                }
                {tile.checked && <TemplateDetails motionslist={motionslist} data={templateDetails} />}
                <RaisedButton 
                    label="Begin Workout" 
                    primary={false} 
                    backgroundColor='#EE773E' 
                    labelColor='#fff' 
                    style={buttonStyle}
                    onClick={this.handleClick}
                />
            </div>
        )
    }
} 

export default Page6;



