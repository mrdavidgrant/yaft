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

    if(this.state.bodyParts) {
      templates = this.state.bodyParts.map((template) => {
        return (
          <TemplateLayout
            templateName={template.name} templateID={template.id}
            handleClick={this.getLiftSet}
          />
        );
      });
    }

    return (
      <div>
        {templates}
        <LiftsetLayout liftSet={this.state.data} />
      </div>

    );
  }
}
