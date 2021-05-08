import React, { Component } from 'react';
import UnAnsweredQuestions from './UnAnsweredQuestions';
import AnsweredQuestions from './AnsweredQuestions';
import Header from './Header';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingUnansweredQuestions: true,
      user: '',
    };

    this.showUnansweredQuestions = this.showUnansweredQuestions.bind(this);
    this.showAnsweredQuestions = this.showAnsweredQuestions.bind(this);
  }

  showUnansweredQuestions(ev) {
    ev.preventDefault();
    this.setState({
      isShowingUnansweredQuestions: true,
    });
  }

  showAnsweredQuestions(ev) {
    ev.preventDefault();
    this.setState({
      isShowingUnansweredQuestions: false,
    });
  }

  componentDidMount() {}
  render() {
    const { isShowingUnansweredQuestions } = this.state;
    console.log({ isShowingUnansweredQuestions });
    return (
      <div>
        <Header />
        <div>
          <div>
            <button onClick={this.showUnansweredQuestions}>unanswered</button>
          </div>
          <div>
            <button onClick={this.showAnsweredQuestions}>answered</button>
          </div>

          <div>
            {isShowingUnansweredQuestions ? (
              <UnAnsweredQuestions />
            ) : (
              <AnsweredQuestions />
            )}
          </div>
        </div>
      </div>
    );
  }
}



export default Home;
