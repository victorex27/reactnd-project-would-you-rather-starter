import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAppLocationKey } from '../actions/appLocation';
import UserScore from './UserScore';

class LeaderBoard extends Component {

  componentDidMount() {

    const { key, pathname } = this.props.location;
    const { history, dispatch } = this.props;

    if (!key) {
      dispatch(setAppLocationKey(pathname));
      history.push('/login');
    }
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map(
          ({ id, name, score, numberOfAnswers, numberOfQuestions, imgUrl }) => (
            <UserScore
              id={id}
              name={name}
              score={score}
              numberOfAnswers={numberOfAnswers}
              numberOfQuestions={numberOfQuestions}
              imgUrl={imgUrl}
            />
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users: { authedUser, ...allUsers } }) => {
  //   console.log({ a: Object.values(users) });
  const modifiedUser = Object.values(allUsers)
    .map(({ id, name, questions, answers, avatarURL: imgUrl }) => {
      const numberOfQuestions = questions.length;
      const numberOfAnswers = Object.keys(answers).length;
      return {
        id,
        name,
        numberOfQuestions,
        numberOfAnswers,
        score: numberOfAnswers + numberOfQuestions,
        imgUrl
      };
    })
    .sort((a, b) => b.score - a.score);

  return {
    users: modifiedUser,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
