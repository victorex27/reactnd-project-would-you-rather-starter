import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Login from './Login';
import Home from './Home';
import NewQuestion from './NewQuestion';
import PollDetail from './PollDetail';
import AnsweredQuestions from './AnsweredQuestions';
import UnAnsweredQuestions from './UnAnsweredQuestions';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <div>
        <Router>
          {isUserLoggedIn && <Header />}
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/home" component={UnAnsweredQuestions}></Route>
            <Route exact path="/add" component={NewQuestion}></Route>
            <Route
              exact
              path="/questions/:question_id"
              component={PollDetail}
            ></Route>
            <Route
              exact
              path="/answered-questions"
              component={AnsweredQuestions}
            ></Route>
            <Route
              exact
              path="/unanswered-questions"
              component={UnAnsweredQuestions}
            ></Route>
            <Route exact path="/leaderboard" component={LeaderBoard}></Route>
            <Route path="/" component={Login}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ users: { authedUser } }) => {
  return {
    isUserLoggedIn: authedUser ? true : false,
  };
};

export default connect(mapStateToProps)(App);
