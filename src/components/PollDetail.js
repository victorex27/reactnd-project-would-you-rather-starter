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
      optionTwoText,
      authorImageUrl,
      isAnswered,
      history,
    } = this.props;

    return (
      <div className='container-div'>
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
  { users: allUsers , questions, user:authedUser },
  props
) => {
  const { question_id: questionId } = props.match.params;
  if (Object.keys(questions).length < 1) {
    return {
      id: '',
      author: '',
      timestamp: '',
      optionOneText: '',
      optionTwoText: '',
      authorImageUrl: '',
    };
  }

  const {
    id,
    author,
    timestamp,
    optionOne: { text: optionOneText,  },
    optionTwo: { text: optionTwoText },
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
