import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
  render() {
    console.log('state: ', this.state);
    console.log('props: ', this.props);
    return (
      <div>
        <Header />
        <div>
          <div>
            <button to="/unanswered">unanswered</button>
          </div>
          <div>
            <button to="/answered">answered</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
