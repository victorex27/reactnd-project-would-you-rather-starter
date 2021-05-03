// import { getInitialData } from '../utils/api';
// import { receiveTweets } from './tweets';
// import { receiveUsers } from './users';
// import { setAuthedUser } from './authedUser';
// import { showLoading, hideLoading } from 'react-redux-loading';

// const AUTHED_ID = 'tylermcginnis';

// export const handleInitialData = () => (dispatch) => {
//   dispatch(showLoading());
//   return getInitialData().then(({ users, tweets }) => {
//     dispatch(receiveTweets(tweets));
//     dispatch(receiveUsers(users));
//     dispatch(setAuthedUser(AUTHED_ID));
//     dispatch(hideLoading());
//   });
// };

// // export const handleInitialData = () => {
// //   return (dispatch) => {
// //     return getInitialData().then(({ users, tweets }) => {
// //       dispatch(receiveTweets(users));
// //       dispatch(receiveUsers(tweets));
// //       dispatch(setAuthedUser(AUTHED_ID));
// //     });
// //   };
// // };
