import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { author, dispatch } = this.props;

    console.log({ optionOneText, optionTwoText, author });
    if (optionOneText && optionTwoText) {
      dispatch(
        handleSaveUserQuestion({ author, optionOneText, optionTwoText })
      );

      dispatch(handleInitialData())
      return;
    }

    console.log('one or more fields is missing');
  }

  render() {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <div>
        <div>You are asking.</div>
        <div>Would you rather</div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            value={optionOneText}
            name="optionOneText"
            onChange={this.onTextChange.bind(this)}
          />
          <span> Or </span>

          <input
            type="text"
            value={optionTwoText}
            name="optionTwoText"
            onChange={this.onTextChange.bind(this)}
          />
          <span>?</span>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({users: { authedUser: author }}) => {
  return { author };
};

export default connect(mapStateToProps)(NewQuestion);
