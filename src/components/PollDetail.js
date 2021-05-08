import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnAnsweredQuestion from './UnAnsweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';

class PollDetail extends Component {
  render() {
    const {
      id,
      author,
      timestamp,
      optionOneText,
      optionOneVotes,
      optionTwoText,
      optionTwoVotes,
      authorImageUrl,
      isAnswered,
    } = this.props;

    return (
      <div>
        {isAnswered ? (
          <AnsweredQuestion
            key={id}
            id={id}
            author={author}
            timestamp={timestamp}
            optionOneText={optionOneText}
            optionTwoText={optionTwoText}
            authorImageUrl={authorImageUrl}
            isSelected={true}
          />
        ) : (
          <UnAnsweredQuestion
            key={id}
            id={id}
            author={author}
            timestamp={timestamp}
            optionOneText={optionOneText}
            optionTwoText={optionTwoText}
            authorImageUrl={authorImageUrl}
            isSelected={true}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (
  { users: { authedUser, ...allUsers }, questions },
  props
) => {
  const { question_id: questionId } = props.match.params;
  const {
    id,
    author,
    timestamp,
    optionOne: { text: optionOneText, votes: optionOneVotes },
    optionTwo: { text: optionTwoText, votes: optionTwoVotes },
  } = questions[questionId];
  //   console.log({ questions });

  const foundAuthor = Object.values(allUsers).find(({ id }) => id === author);

  return {
    id,
    author,
    timestamp,
    optionOneText,
    optionTwoText,
    authorImageUrl: foundAuthor ? foundAuthor.avatarURL : '',
    isAnswered: allUsers[authedUser].answers[questionId] ? true : false,
  };
};

export default connect(mapStateToProps)(PollDetail);
