import React, { Component } from 'react';
import UserImage from './UserImage';

class ViewPoll extends Component {
  render() {
      
    const {
      imgUrl,
      author,
      optionOneText,
      optionTwoText,
      totalVotes,
    } = this.props;

    return (
      <div>
        <div> {author} Asked: </div>
        <UserImage imgUrl={imgUrl} />
        <div>Would you rather</div>
        <div>
          <div>
            <label>{optionOneText}</label> <span>75%</span>
            <label>{optionTwoText}</label> <span>25%</span>
          </div>
          <div>
            <span>Total Number of Votes: {totalVotes}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPoll;
