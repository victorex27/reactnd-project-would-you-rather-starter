import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { setDefaultUser } from '../actions/users';
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
    const { history, dispatch } = this.props;
    const { value } = this.state;
    dispatch(setDefaultUser(value));
    history.push('/home');
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData());
    console.log(this.props.location);
  }

  componentWill
  render() {
    const { users } = this.props;
    const { value } = this.state;

    return (
      <div>
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
        </div>
        <div>
          <button onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps)(Login);
