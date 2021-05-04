import React, { Component } from 'react';

class NewQuestion extends Component {
  render() {
    return (
      <div>
        <div>You are asking.</div>
        <div>Would you rather</div>
        <form>
          <input type="text" value="be a developer" name="optionOne" />
          <span> Or </span>
          <input type="text" value="be a Ui/ Ux designer" name="optionTwo" />
          <span>?</span>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewQuestion;
