import React, { Component } from 'react';
import UnAnsweredQuestion from './UnAnsweredQuestion';
import { connect } from 'react-redux';

class UnAnsweredQuestions extends Component {
  render() {
    const { unAnsweredQuestions } = this.props;
    return (
      <div>
        {unAnsweredQuestions.map(
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
            <UnAnsweredQuestion
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
  users: { authedUser: user, ...allUsers },
  questions: quest,
}) => {
  const questions = Object.keys(quest);
  const unAnsweredQuestions = questions
    .filter((id) => {
      const obj = quest[id];
      if (
        !obj.optionOne.votes.includes(user) &&
        !obj.optionTwo.votes.includes(user)
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
    unAnsweredQuestions,
  };
};

export default connect(mapStateToProps)(UnAnsweredQuestions);
