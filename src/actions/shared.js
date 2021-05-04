import { getInitialData } from '../utils/api';
import { getAllUsers } from './users';
// import { showLoading, hideLoading } from 'react-redux-loading';

// const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => (dispatch) => {
  //   dispatch(showLoading());
  return getInitialData().then(({ users, questions }) => {
    dispatch(getAllUsers(users));
    // dispatch(hideLoading());
  });
};
