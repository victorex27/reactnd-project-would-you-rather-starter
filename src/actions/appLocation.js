
export const SET_APP_LOCATION = 'SET_APP_LOCATION';

export const setAppLocationKey = (location) => {
  return {
    type: SET_APP_LOCATION,
    location,
  };
};