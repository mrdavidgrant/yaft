import React, {Component} from 'react';

const motionsData = '/body-parts/:id'

const categories = [
  "arms",
  "legs",
  "back",
  "chest",
  "shoulders"
];

const motions = [
  'armsMotions',
  'legsMotions',
  'backMotions',
  'chestMotions',
  'shouldersMotions'
]

const settings = [
  'armsSettings',
  'legsSettings',
  'backSettings',
  'chestSettings',
  'shoulderSettings'
]

export default class NewWorkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory: null,
    }
    this.changeMotions = this.changeMotions.bind(this);
  }
  // componentDidMount(){
  //     fetch('http://localhost:3000/body-parts/1')
  //     .then(res => res.json())
  //     .then(value => {
  //
  //     })

  changeMotions(motion) {
    this.setState({ currentCategory: motion })
  }
  changeSetting(category){
    this.setState({ currentCategory: category})
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Area of Focus</h1>
          <ul>
            { categories.map((category, idx) => {
              return (
                <li key={idx}>
                  <button onClick={() => this.changeMotions(category)}>
                    { category }
                  </button>
                </li>
              )
            }) }
          </ul>
        </nav>
        <h2>Activities</h2>
        <button onClick={() => this.changeSetting(settings)}>
          { this.state.currentCategory !== null &&
            <div>{this.state.currentCategory}</div>
          }
        </button>
        <h3>Settings</h3>
        { this.state.currentCategory !== null &&
          <div>{this.state.currentCategory}</div>
        }
      </div>
    )
  }



}
