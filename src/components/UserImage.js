import React, { Component } from 'react';
import './UserImage.css';

class UserImage extends Component {
  render() {
    const { imgUrl } = this.props;
    return (
      <div className='UserImage-div'>
        <img src={imgUrl} alt="user" />
      </div>
    );
  }
}

export default UserImage;
