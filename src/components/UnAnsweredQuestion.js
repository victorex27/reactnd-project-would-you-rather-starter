import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserImage from './UserImage';

import { handleSaveUserQuestionAnswer } from '../actions/questions';
import { handleInitialData } from '../actions/shared';

class UnAnsweredQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  onChange(ev) {
    // ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { answer } = this.state;
    const { id, dispatch, optionOneText, optionTwoText, history } =
      this.props;
    if (answer) {
      const option = answer === optionOneText ? 'optionOne' : 'optionTwo';
      dispatch(handleSaveUserQuestionAnswer(id, answer, option));
      dispatch(handleInitialData());

      history.push('/questions/' + id);
      return;
    }
    console.log('state is empty');
  }
  render() {
    const {
      id,
      authorImageUrl,
      author,
      optionOneText,
      optionTwoText,
      timestamp,
      isSelected = false,
      onNavigateToQuestion,
    } = this.props;

    console.log({ onNavigateToQuestion });
    const ansDiv = (
      <div>
        <div> {author} Asks: </div>
        <UserImage imgUrl={authorImageUrl} />
        <div>Would you rather</div>
        {isSelected && (
          <form onSubmit={this.onSubmit.bind(this)}>
            <div>
              <div>
                <span>
                  <input
                    type="radio"
                    name="answer"
                    value={optionOneText}
                    onChange={this.onChange.bind(this)}
                  />
                  <label htmlFor="optionOne">{optionOneText}</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="answer"
                    value={optionTwoText}
                    onChange={this.onChange.bind(this)}
                  />
                  <label htmlFor="optionOne">{optionTwoText}</label>
                </span>
              </div>
              <div>
                <button>Vote</button>
              </div>
            </div>
          </form>
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

export default connect()(UnAnsweredQuestion);
