import { SET_APP_LOCATION } from '../actions/appLocation';

export default function appLocation(state = {}, action) {
  switch (action.type) {
    case SET_APP_LOCATION:
      return action.location ;

    default:
      return state;
  }
}
