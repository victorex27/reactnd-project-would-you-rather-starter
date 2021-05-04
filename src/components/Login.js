import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
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
    console.log({ ev: ev });
    this.setState(() => ({ value: ev.target.value }));
  };

  onClick = (ev) => {
    ev.preventDefault();
    const { history } = this.props;
    const { value } = this.state;

    history.push({ pathname: '/home', state: { value } });
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
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
