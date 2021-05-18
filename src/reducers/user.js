import { SET_USER, RESET_USER } from '../actions/user';

export default function user(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;

    case RESET_USER:
      return null;
    default:
      return state;
  }
}
