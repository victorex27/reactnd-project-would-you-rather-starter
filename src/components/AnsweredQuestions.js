import React, { Component } from 'react';
import AnsweredQuestion from './AnsweredQuestion';
import { connect } from 'react-redux';
import { setAppLocationKey } from '../actions/appLocation';

class AnsweredQuestions extends Component {
  componentDidMount() {
    const { key, pathname } = this.props.location;
    const { history, dispatch } = this.props;

    if (!key) {
      dispatch(setAppLocationKey(pathname));
      history.push('/login');
    }
  }

  render() {
    const { answeredQuestions } = this.props;
    return (
      <div className="container-div">
        {answeredQuestions.map(
          ({
            id,
            author,
            timestamp,
            optionOneText,
            optionOneVotes,
            optionTwoText,
            optionTwoVotes,
            authorImageUrl,
          }) => (
            <AnsweredQuestion
              key={id}
              id={id}
              author={author}
              timestamp={timestamp}
              optionOneText={optionOneText}
              optionTwoText={optionTwoText}
              authorImageUrl={authorImageUrl}
            />
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  users: allUsers,
  user,
  questions: quest,
}) => {
  const questions = Object.keys(quest);
  const answeredQuestions = questions
    .filter((id) => {
      const obj = quest[id];

      if (
        obj.optionOne.votes.includes(user) ||
        obj.optionTwo.votes.includes(user)
      ) {
        return obj;
      }
    })
    .map((i) => {
      const {
        id,
        author,
        timestamp,
        optionOne: { text: optionOneText, votes: optionOneVotes },
        optionTwo: { text: optionTwoText, votes: optionTwoVotes },
      } = quest[i];

      const foundAuthor = Object.values(allUsers).find(
        ({ id }) => id === author
      );

      return {
        id,
        author,
        timestamp,
        optionOneText,
        optionOneVotes,
        optionTwoText,
        optionTwoVotes,
        authorImageUrl: foundAuthor ? foundAuthor.avatarURL : '',
      };
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredQuestions,
  };
};

export default connect(mapStateToProps)(AnsweredQuestions);
