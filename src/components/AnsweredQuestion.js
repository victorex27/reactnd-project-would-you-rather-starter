import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserImage from './UserImage';

class AnsweredQuestion extends Component {
  render() {
    const {
      id,
      authorImageUrl,
      author,
      optionOneText,
      optionTwoText,
      timestamp,
      answers,
      isSelected = false,
      optionOneVotePercentage,
      optionTwoVotePercentage,
      totalNumberOfVoteOne,
      totalNumberOfVoteTwo,
      totalNumberOfVotes,
    } = this.props;

    const ansDiv = (
      <div className="tweet-div">
        <div> {author} Asks: </div>
        <UserImage imgUrl={authorImageUrl} />
        <div>You would rather be </div>
        {isSelected && (
          <div>
            <div>
              {/* answered will be first and bold */}
              <span className={answers[id] === 'optionOne' ? 'bold' :''}>
                {optionOneText}
              </span>

              <span> {totalNumberOfVoteOne} votes</span>
              <span> {optionOneVotePercentage} %</span>
              <span> than </span>
              <span className={answers[id] === 'optionTwo' ? 'bold':''}>
                {optionTwoText}
              </span>
              <span> {totalNumberOfVoteTwo} votes</span>
              <span> {optionTwoVotePercentage}%</span>
            </div>
            <div>
              <span>
                Total Number of Votes:
                {totalNumberOfVotes}
              </span>
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div>
        {!isSelected ? <Link to={'/questions/' + id}>{ansDiv}</Link> : ansDiv}
      </div>
    );
  }
}

const mapStateToProps = (
  { users:allUsers , questions, user: authedUser },
  { id }
) => {
  const user = Object.values(allUsers).find(({ id }) => id === authedUser);

  const {
    optionOne: { votes: votes1 },
    optionTwo: { votes: votes2 },
  } = questions[id];

  const totalNumberOfVotes = votes1.length + votes2.length;
  return {
    answers: user ? user.answers : [],
    totalNumberOfVoteOne: votes1.length,
    totalNumberOfVoteTwo: votes2.length,
    optionOneVotePercentage: Number(votes1.length / totalNumberOfVotes) * 100,
    optionTwoVotePercentage: Number(votes2.length / totalNumberOfVotes) * 100,
    totalNumberOfVotes,
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);
