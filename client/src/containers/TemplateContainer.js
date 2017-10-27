import React, {Component} from 'react'
import TemplateLayout from '../components/TemplateLayout.js'
import LiftsetLayout from '../components/LiftsetLayout.js'



export default class TemplateContainer extends Component {
  constructor (props) {
    super(props);
    this.userId = this.props.match.params.user_id

    this.state = {
      bodyParts: [],
      data: []
    }
    this.getLiftSet = this.getLiftSet.bind(this);
  }
  componentWillMount(){
      fetch(`/api/v1/users/${this.userId}/templates`)
      .then(res => res.json())
      .then((bodyParts) => {
        const templates = bodyParts.templates;
        console.log(templates);
        this.setState({
          bodyParts: templates
        })
      })
    }

  getLiftSet(id){
    console.log(id)
    fetch(`/api/v1/users/${this.userId}/templates/${id}`)
    .then(res => res.json())
    .then((data) => {
      const liftSet = data.liftsets;
      console.log(liftSet);
      this.setState({
        data: liftSet
      })
    })
  }

  render() {
    let templates = null;
    let liftsetList= null;

    if(this.state.bodyParts) {
      templates = this.state.bodyParts.map((template) => {
        return (
          <TemplateLayout
            templateName={template.name}
            templateID={template.id}
            handleClick={this.getLiftSet}
          />
        );
      });
    }

    if (this.state.data){
      liftsetList = this.state.data.map((liftset) => {
        console.log(liftset.motion)
        return (
          <LiftsetLayout
            motionTem={liftset.motion}
            equipmentTem={liftset.equipment}
            weightTem={liftset.weight}
            repsTem={liftset.reps}
          />
        );
      });
    }

    return (
      <div>
        {templates}
        {liftsetList}
      </div>

    );
  }
}
