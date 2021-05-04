import React, { Component } from 'react';
import UnAnsweredQuestion from './UnAnsweredQuestion';

class UnAnsweredQuestions extends Component {
  render() {
    return (
      <div>
        <UnAnsweredQuestion />
        <UnAnsweredQuestion />
        <UnAnsweredQuestion />
        <UnAnsweredQuestion />
      </div>
    );
  }
}

export default UnAnsweredQuestions;
