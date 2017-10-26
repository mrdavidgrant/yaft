import React, {Component} from 'react';

const sampleData: [
  template: {
    id: 2,
    created_at: "2017-08-28T14:30:00.000-04:00",
    updated_at: "2017-10-26T14:39:07.892-04:00",
    name: "Arnold_Chest_Back",
    user_id: "24X947",
    completed_at: "2017-08-28T16:53:00.000-04:00",
    heartrate: [ ],
    calories: [ ],
    template: true
  },
liftsets: [
  {
    id: 40,
    reps: 12,
    weight: null,
    rest: 90,
    started: null,
    stopped: null,
    motion: "Bench Press",
    equipment: "Barbell"
  },
  {
    id: 41,
    reps: 10,
    weight: null,
    rest: 90,
    started: null,
    stopped: null,
    motion: "Bench Press",
    equipment: "Barbell"
  },
  {
    id: 42,
    reps: 8,
    weight: null,
    rest: 90,
    started: null,
    stopped: null,
    motion: "Bench Press",
    equipment: "Barbell"
  },
]

const TemplateLayout = (props) => (
  <div>
    <button>{props.templateName}</button>
  </div>
)

class NewWorkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory: null,
    }
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Template</h1>
          <ul>

          </ul>
        </nav>
        <h2>Form</h2>
        <ul>

        </ul>
        <h3>Create Template</h3>
        <ul>

        </ul>
      </div>
    )
  }
}

export default NewWorkout
