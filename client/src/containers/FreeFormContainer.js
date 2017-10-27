import React, {Component} from 'react';
import CreateButton from '../components/CreateButton.js';
import FreeForm from '../components/FreeForm.js';

export default class FreeFormContainer extends Component {
  constructor(props){
    super(props)
    this.getTemplateContainer = this.getTemplateContainer.bind(this)
    this.getFreeFormContainer = this.getFreeFormContainer.bind(this)
  }

  getTemplateContainer(){

  }

  getFreeFormContainer(){

  }

  render(){

    return (
      <div>
        <CreateButton getTemplate={this.getTemplateContainer} newForm={this.getFreeFormContainer}/>
        <FreeForm />
      </div>
    )
  }
}
