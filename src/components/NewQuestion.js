import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAppLocationKey } from '../actions/appLocation';
import { handleSaveUserQuestion } from '../actions/questions';
import { handleInitialData } from '../actions/shared';

class NewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOneText: '',
      optionTwoText: '',
    };
  }

  componentDidMount() {
    const { key, pathname } = this.props.location;
    const { history, dispatch } = this.props;
    if (!key) {
      dispatch(setAppLocationKey(pathname));
      history.push('/login');
    }
  }
  onTextChange(ev) {
    ev.preventDefault();

    this.setState({
      ...this.state,
      [ev.target.name]: ev.target.value,
    });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { author, dispatch, history } = this.props;

    if (optionOneText && optionTwoText) {
      dispatch(
        handleSaveUserQuestion({ author, optionOneText, optionTwoText })
      );

      dispatch(handleInitialData());
      history.push('/home');
      return;
    }

    // console.log('one or more fields is missing');
  }

  render() {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <div className="container-div">
        <span>You are asking.</span>
        <span>Would you rather</span>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            value={optionOneText}
            name="optionOneText"
            onChange={this.onTextChange.bind(this)}
          />
          <div> Or </div>

          <input
            type="text"
            value={optionTwoText}
            name="optionTwoText"
            onChange={this.onTextChange.bind(this)}
          />
          <div>
            <span>?</span>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user: author }) => {
  return { author };
};

export default connect(mapStateToProps)(NewQuestion);
