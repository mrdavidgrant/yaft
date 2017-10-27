import React, { Component } from 'react';

class FreeForm extends Component {
  render() {
    return (
      <div>
        <form>
        Reps:<input type="text"></input>
        Weight:<input type="text"></input>
        Motion:<input type="text"></input>
        Equipment:<input type="text"></input>
        </form>
        <input type='submit' vale='Submit'></input>
      </div>
    )
  }
}

export default FreeForm
