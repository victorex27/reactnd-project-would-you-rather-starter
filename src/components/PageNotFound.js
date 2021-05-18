import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetDefaultUser } from '../actions/user';
import { setAppLocationKey } from '../actions/appLocation';


class PageNotFound extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(resetDefaultUser());
    dispatch(setAppLocationKey('/home'));
  }
  render() {
    return (
      <div className="container-div">
        <div>
          <div>404 Error</div>
          <div>Page Not Found</div>
          <div>
            <Link to="/login">Login Page </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(PageNotFound);
