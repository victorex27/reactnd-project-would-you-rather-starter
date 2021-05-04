import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import NewQuestion from './NewQuestion';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
