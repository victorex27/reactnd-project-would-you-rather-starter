import React, { Component } from 'react';
import UserImage from 'UserImage';

class UserScore extends Component {
  render() {
    const { imgUrl, answered, created } = this.props;

    return (
      <div>
        <UserImage imgUrl={imgUrl} />
        <div>
          <div>
            <label>Answered</label>
            {answered}
          </div>
          <div>
            <label>Created</label>
            {created}
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
