import React, { Component } from 'react';

class Header extends Component {
  render() {
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
              <a href="#"><span>Amaobi</span>Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
