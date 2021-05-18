import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnAnsweredQuestion from './UnAnsweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import { setAppLocationKey } from '../actions/appLocation';

class PollDetail extends Component {
  componentDidMount() {
    const { key, pathname } = this.props.location;
    const { history, dispatch } = this.props;
    if (!key) {
      console.log('this.props.location', this.props.location);
      dispatch(setAppLocationKey(pathname));
      history.push('/login');
    }
  }

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
      history,
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
            history={history}
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
            history={history}
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
  console.log('props.match.params: ', !questions);
  const { question_id: questionId } = props.match.params;
  if (Object.keys(questions).length < 1) {
    console.log('here');
    return {
      id: '',
      author: '',
      timestamp: '',
      optionOneText: '',
      optionTwoText: '',
      authorImageUrl: '',
    };
  }

  console.log('two');
  const {
    id,
    author,
    timestamp,
    optionOne: { text: optionOneText, votes: optionOneVotes },
    optionTwo: { text: optionTwoText, votes: optionTwoVotes },
  } = questions[questionId];

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
