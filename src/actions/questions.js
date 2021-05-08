import { getInitialData } from '../utils/api';

export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getAllQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const handleRetrieveAllQuestions = () => (dispatch, getState) => {
    return getInitialData()
      .then(({ questions }) => {
        console.log({ questions });
        dispatch(getAllQuestions(questions));
      })
      .catch();
  };