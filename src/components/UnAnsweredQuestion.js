import React, { Component } from 'react';
import UserImage from 'UserImage';

class UnAnsweredQuestion extends Component {
  render() {
    const { imgUrl, questionUser, optionOne, optionTwo } = this.props;

    return (
      <div>
        <div> {questionUser} Asks: </div>
        <UserImage imgUrl={imgUrl} />
        <div>Would you rather</div>
        <form>
          <div>
            <input type="radio" value={optionOne} isSelected={true} />
            <input type="radio" value={optionTwo} isSelected={false} />
          </div>
          <div>
            <button>Vote</button>
            <button>View Result</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UnAnsweredQuestion;
