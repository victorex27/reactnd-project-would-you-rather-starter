import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <select defaultValue="1">
            <option value="1"> Amaobi</option>
            <option value="2"> Amanda</option>
            <option value="3"> Hammed</option>
          </select>
        </div>
        <div><button>Login</button></div>
      </div>
    );
  }
}

export default Login;
