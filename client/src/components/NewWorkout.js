import React, {Component} from 'react';

const categories = [
  "arms",
  "legs",
  "back",
  "chest",
  "shoulders"
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
                  <button onClick={(c) => this.changeCategory(c)}>
                    { c }
                  </button>
                </li>
              )
            }) }
          </ul>
        </nav>
      </div>

    )
  }

}
