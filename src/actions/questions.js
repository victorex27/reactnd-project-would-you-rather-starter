import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { handleInitialData } from './shared';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const getAllQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const saveUserQuestion = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};

export const saveUserAnwser = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};

export const handleSaveUserQuestion = (question) => (dispatch, getState) => {
  return saveQuestion(question)
    .then((question) => {})
    .catch();
};

export const handleSaveUserQuestionAnswer = (qid, answer, option) => (
  dispatch,
  getState
) => {
  const {
    users: { authedUser },
    ...rest
  } = getState();

  console.log({ authedUser, qid, answer, option });
  return saveQuestionAnswer({ authedUser, qid, answer, option })
    .then((res) => {
      
      // dispatch();
      // dispatch(handleInitialData);
    })
    .catch();
};
