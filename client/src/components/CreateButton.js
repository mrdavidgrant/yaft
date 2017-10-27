import React, { Component } from 'react';

class CreateButton extends Component {
  render() {
    return (
      <div>
        <li><button onClick={this.props.getTemplate}>Template</button></li>
        <li><button onClick={this.props.newForm}>Create New Template</button></li>
      </div>
    )
  }
}

export default CreateButton
