import React, { Component } from 'react';
import Login from './Login';
import Header from './Header';
import NewQuestion from './NewQuestion';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewQuestion />
      </div>
    );
  }
}

export default App;
