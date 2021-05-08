import React, { Component } from 'react';
import UserImage from './UserImage';

class UnAnsweredQuestion extends Component {
  render() {
    const {
      id,
      authorImageUrl,
      author,
      optionOneText,
      optionTwoText,
      timestamp,
    } = this.props;

    return (
      <div>
        <div> {author} Asks: </div>
        <UserImage imgUrl={authorImageUrl} />
        <div>Would you rather</div>
        <form>
          <div>
            <span>
              <input type="radio" name="anwser" value={optionOneText} />{' '}
              <label htmlFor="optionOne">{optionOneText}</label>
            </span>
            <span>
              <input type="radio" name="anwser" value={optionTwoText} />
              <label htmlFor="optionOne">{optionTwoText}</label>
            </span>
          </div>
          <div>
            <button>Vote</button>
            <button>View Result</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UnAnsweredQuestion;
