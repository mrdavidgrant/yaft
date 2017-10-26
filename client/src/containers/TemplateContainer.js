import React, {Component} from 'react'

class TemplateContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentWillMount(){
      fetch('/api/v1/users/24X947/templates/2')
      .then(res => res.json())
      this.setState({
        
      })

  render(){
    const templates = props.data.map((value) =>{
      <TemplateLayout {value} />
    })
  }
}
