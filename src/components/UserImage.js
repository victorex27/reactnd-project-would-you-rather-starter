import React, { Component } from 'react';

class UserImage extends Component {
  render() {
    const { imgUrl } = this.props;
    return (
      <div>
        <img src={imgUrl} alt="user-image" />
      </div>
    );
  }
}

export default UserImage;
