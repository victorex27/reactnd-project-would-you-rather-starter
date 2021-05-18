export const GET_USERS = 'GET_USERS';

export const getAllUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};


