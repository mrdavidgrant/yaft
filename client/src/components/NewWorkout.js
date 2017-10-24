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

export default class NewWorkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory: null,
    }
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount(){
      fetch(motionsData){
        
      }
  }

  changeCategory(category) {
    this.setState({ currentCategory: category })
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            { categories.map((category, idx) => {
              return (
                <li key={idx}>
                  <button onClick={() => this.changeCategory(category)}>
                    { category }
                  </button>
                </li>
              )
            }) }
          </ul>
        </nav>
        { this.state.currentCategory !== null &&
          <div>{this.state.currentCategory}</div>
        }
      </div>


    )
  }



}
