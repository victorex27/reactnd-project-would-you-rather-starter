import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Answered Questions</a>
            </li>
            <li>
              <a href="#">Unanwsered Questions</a>
            </li>
            <li>
              <a href="#">Ask New Question</a>
            </li>
            <li>
              <a href="#">Leader Board</a>
            </li>
            <li>
              <a href="#">
                <span>{user}</span>Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ users: { authedUser: user } }) => {
  return { user };
};

export default connect(mapStateToProps)(Header);
