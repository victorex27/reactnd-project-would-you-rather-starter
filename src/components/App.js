import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './Header';
import Login from './Login';
import NewQuestion from './NewQuestion';
import PollDetail from './PollDetail';
import AnsweredQuestions from './AnsweredQuestions';
import UnAnsweredQuestions from './UnAnsweredQuestions';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './PageNotFound';

class App extends Component {
  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <div>
        <Router>
          <div>
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
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/pagenotfound" component={PageNotFound}></Route>
              <Route component={PageNotFound}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    isUserLoggedIn: user ? true : false,
  };
};

export default connect(mapStateToProps)(App);
