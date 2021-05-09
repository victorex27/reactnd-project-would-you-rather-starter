import React, { Component } from 'react';
import UserImage from './UserImage';

class UserScore extends Component {
  render() {
    const {
      imgUrl,
      name,
      numberOfQuestions,
      numberOfAnswers,
      score,
    } = this.props;

    return (
      <div>
        <UserImage imgUrl={imgUrl} /> <span> {name}</span>
        <div>
          <div>
            <label>Number of Answers</label>
            {numberOfAnswers}
          </div>
          <div>
            <label>Number of Questions</label>
            {numberOfQuestions}
          </div>
        </div>
        <div>
          <label>Score</label>
          {score}
        </div>
      </div>
    );
  }
}

export default UserScore;
