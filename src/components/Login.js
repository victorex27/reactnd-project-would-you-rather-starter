import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';

import { handleInitialData } from '../actions/shared';
import { setDefaultUser, resetDefaultUser } from '../actions/user';
// import {}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'none',
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange = (ev) => {
    ev.preventDefault();
    ev.persist();
    this.setState(() => ({ value: ev.target.value }));
  };

  onClick = (ev) => {
    ev.preventDefault();
    const { history, dispatch, appLocation } = this.props;
    const { value } = this.state;
    if (value === 'none') {
      return;
    }
    dispatch(setDefaultUser(value));
    if (appLocation) {
      history.push(appLocation);
      return;
    }
    history.push('/home');
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
    dispatch(resetDefaultUser());
  }

  render() {
    const { users } = this.props;
    const { value } = this.state;

    return (
      <div className="container-div">
        <div>
          <select onChange={(ev) => this.onSelectChange(ev)} value={value}>
            <option value="none">None</option>
            {Object.keys(users).map((id) => {
              const { name } = users[id];
              return (
                <option value={id} key={id}>
                  {name}
                </option>
              );
            })}
          </select>
          <button onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, appLocation }) => {
  return { users, appLocation };
};

export default connect(mapStateToProps)(Login);
