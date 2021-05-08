import React, { Component } from 'react';
import AnsweredQuestion from './AnsweredQuestion';
import { connect } from 'react-redux';

class AnsweredQuestions extends Component {
  render() {
    const { answeredQuestions } = this.props;
    return (
      <div>
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
  users: { authedUser: user, ...allUsers },
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
    });

  return {
    answeredQuestions,
  };
};

export default connect(mapStateToProps)(AnsweredQuestions);
