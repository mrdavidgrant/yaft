import React, {Component} from 'react';

const categories = [
  "Arms",
  "Legs",
  "Back",
  "Chest"
];

export default class NewWorkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory: null
    }

  }
  render() {
    return (
      <div>
        <nav>
          <ul>
          { categories.map(c => {
            return (
              <li key={c}>
                <button onClick={ this.changeCategory(this.props.currentCategory) }>
                  { c }
                </button>
              </li>
            )
          }) }
          </ul>
        </nav>
        <section>
        </section>
      </div>
    )
  }

  changeCateory = (bodyParts) => {
    if bodyParts == Arms
    }
}
