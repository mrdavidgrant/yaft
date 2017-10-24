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

<<<<<<< HEAD
const settings = [
  'armsSettings',
  'legsSettings',
  'backSettings',
  'chestSettings',
  'shoulderSettings'
]

=======
>>>>>>> develop
export default class NewWorkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory: null,
    }
<<<<<<< HEAD
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
=======
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount(){
      fetch('http://localhost:3000/body-parts/:id')
      .then(res => res.json())
      .then(value => {
        const
        this.setState({})
      })

      }
  }

  changeCategory(category) {
    this.setState({ currentCategory: category })
>>>>>>> develop
  }

  render() {
    return (
      <div>
        <nav>
<<<<<<< HEAD
          <h1>Area of Focus</h1>
=======
>>>>>>> develop
          <ul>
            { categories.map((category, idx) => {
              return (
                <li key={idx}>
<<<<<<< HEAD
                  <button onClick={() => this.changeMotions(category)}>
=======
                  <button onClick={() => this.changeCategory(category)}>
>>>>>>> develop
                    { category }
                  </button>
                </li>
              )
            }) }
          </ul>
        </nav>
<<<<<<< HEAD
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
=======
        { this.state.currentCategory !== null &&
          <div>{this.state.currentCategory}</div>
        }

      </div>


>>>>>>> develop
    )
  }



}
