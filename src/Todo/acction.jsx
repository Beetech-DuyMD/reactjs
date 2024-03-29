import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constant";
export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload: payload,
  };
};
export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload: payload,
  };
};

export const removeJob = (payload) => {
  return {
    type: REMOVE_JOB,
    payload: payload,
  };
};
