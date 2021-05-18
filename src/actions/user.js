export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';



export const setDefaultUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const resetDefaultUser = (user) => {
  return {
    type: RESET_USER,
  };
};
