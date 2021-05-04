import React, { Component } from 'react';
import UserImage from 'UserImage';

class ViewPoll extends Component {
  render() {
      
    const {
      imgUrl,
      questionUser,
      optionOne,
      optionTwo,
      totalVotes,
    } = this.props;

    return (
      <div>
        <div> {questionUser} Asked: </div>
        <UserImage imgUrl={imgUrl} />
        <div>Would you rather</div>
        <form>
          <div>
            <label>{optionOne}</label> <span>75%</span>
            <label>{optionTwo}</label> <span>25%</span>
          </div>
          <div>
            <span>Total Number of Votes: {totalVotes}</span>
          </div>
        </form>
      </div>
    );
  }
}

export default ViewPoll;
