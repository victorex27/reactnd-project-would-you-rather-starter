import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import appLocation from './appLocation';
// import authedUser from './authedUser';
// import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  users,
  questions,
  appLocation
  //   authedUser,
  //   loadingBar: loadingBarReducer,
});
