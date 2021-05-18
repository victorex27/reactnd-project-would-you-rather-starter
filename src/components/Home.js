import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnAnsweredQuestions from './UnAnsweredQuestions';
import AnsweredQuestions from './AnsweredQuestions';
import { setAppLocationKey } from '../actions/appLocation';

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

  componentDidMount() {
    const { key, pathname } = this.props.location;
    const { history, dispatch } = this.props;

    if (!key) {
      dispatch(setAppLocationKey(pathname));
      history.push('/login');
    }
  }

  render() {
    const { isShowingUnansweredQuestions } = this.state;
    return (
      <div>
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

export default connect()(Home);
