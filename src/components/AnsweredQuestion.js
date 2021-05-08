import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    } = this.props;


    return (
      <div>
        <div> {author} Asks: </div>
        <UserImage imgUrl={authorImageUrl} />
        <div>You would rather be</div>
        <form>
          <div>
            {/* answered will be first and bold */}
            <span className={answers[id] === 'optionOne' && 'bold'}>
              {optionOneText}
            </span>
            <span>than</span>
            <span className={answers[id] === 'optionTwo' && 'bold'}>
              {optionTwoText}
            </span>
          </div>
          <div>
            <button>View Result</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users: { authedUser, ...allUsers } }) => {
  const user = Object.values(allUsers).find(({ id }) => id === authedUser);

  return {
    answers: user ? user.answers : [],
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);
