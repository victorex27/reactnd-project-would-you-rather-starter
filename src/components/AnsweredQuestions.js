import React, { Component } from 'react';
import AnsweredQuestion from './AnsweredQuestion';

class AnsweredQuestions extends Component {
  render() {
    return (
      <div>
        <AnsweredQuestion />
        <AnsweredQuestion />
        <AnsweredQuestion />
        <AnsweredQuestion />
      </div>
    );
  }
}

export default AnsweredQuestions;
