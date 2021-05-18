import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

 
  
  render() {
    const { user } = this.props;
    return (
      <div className='container-div'>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/answered-questions">Answered Questions</Link>
            </li>
            <li>
              <Link to="/unanswered-questions">Unanwsered Questions</Link>
            </li>
            <li>
              <Link to="/add">Ask New Question</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leader Board</Link>
            </li>
            <li>
              <Link to="/login">
                <span>{user} </span>Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({  user }) => {
  return { user };
};

export default connect(mapStateToProps)(Header);
