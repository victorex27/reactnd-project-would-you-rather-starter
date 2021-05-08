import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      isSelected = false,
    } = this.props;

    const ansDiv = (
      <div>
        <div> {author} Asks: </div>
        <UserImage imgUrl={authorImageUrl} />
        <div>Would you rather</div>
        {isSelected && (
          <div>
            <div>
              <span>
                <input type="radio" name="anwser" value={optionOneText} />
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
          </div>
        )}
      </div>
    );
    
    return (
      <div>
        {!isSelected ? <Link to={'/questions/' + id}>{ansDiv}</Link> : ansDiv}
      </div>
    );
  }
}

export default UnAnsweredQuestion;
