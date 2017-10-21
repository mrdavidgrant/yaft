import React, {Component} from 'react';

const categories = [
  "arms",
  "legs",
  "back",
  "chest",
  "shoulders"
];

const motions = [
  "armsMotions",
  "legsMotions",
  "backMotions",
  "chestMotions",
  "shouldersMotion"
];

export default class NewWorkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory: null
    }
  }

  changeCateory () => {

    case
  </nav>
  <section>
    <ul class=''>
      <li>
      </li>
    </ul>
  </section>
</div>
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

    )
  }

}
