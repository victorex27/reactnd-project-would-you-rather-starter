import React, { Component } from 'react';
import UnAnsweredQuestion from './UnAnsweredQuestion';
import { connect } from 'react-redux';
import { setAppLocationKey } from '../actions/appLocation';

class UnAnsweredQuestions extends Component {
  constructor(props) {
    super(props);
  }

  onNavigateToQuestion(id) {
    console.log('this is the id: ', id);
    const { history } = this.props;
    history.push('/questions/' + id);
  }

  componentDidMount() {
    const { key, pathname } = this.props.location;
    const { history, dispatch } = this.props;
    console.log('here');
    if (!key) {
      dispatch(setAppLocationKey(pathname));
      history.push('/login');
    }
  }

  render() {
    const { unAnsweredQuestions, history } = this.props;

    console.log({ history });
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
              onNavigateToQuestion={() => this.onNavigateToQuestion(id)}
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
