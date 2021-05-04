import React, { Component } from 'react';
import UserImage from 'UserImage';

class AnsweredQuestion extends Component {
  render() {
    const { imgUrl, questionUser, optionOne, optionTwo } = this.props;

    return (
      <div>
        <div> {questionUser} Asks: </div>
        <UserImage imgUrl={imgUrl} />
        <div>You would rather be</div>
        <form>
          <div>
            {/* answered will be first and bold */}
            <span>{optionOne}</span>
            <span>than</span>
            <span>{optionTwo}</span>
          </div>
          <div>
            <button>View Result</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AnsweredQuestion;
