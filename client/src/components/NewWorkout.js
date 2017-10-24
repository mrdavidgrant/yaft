import React, {Component} from 'react';



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
  'shouldersSettings'
]

export default class NewWorkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory: null,
    }
    this.changeMotions = this.changeMotions.bind(this);
    this.changeSettings = this.changeSettings.bind(this);
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
  changeSettings(setting){
    this.setState({ currentCategory: setting})
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
        <ul>
          { motions.filter((motion) => { return motion.includes(this.state.currentCategory) }).map((motion, idx) => {
            return (
              <li key={idx}>
                <button >
                  { motion }
                </button>
              </li>
            )
          }) }
        </ul>
        <h3>Settings</h3>
        <ul>
          { settings.filter((setting) => { return setting.includes(this.state.currentCategory) }).map((setting, idx) => {
            return (
              <li key={idx}>
                  { setting }
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }



}
