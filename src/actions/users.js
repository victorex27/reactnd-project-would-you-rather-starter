export const GET_USERS = 'GET_USERS';
export const SET_USER = 'SET_USER';

export const getAllUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const setDefaultUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};
