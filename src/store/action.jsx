import {
  ADD_TODO,
  SET_TODO_INPUT,
  REMOVE_TODO,
  UPDATE_TODO_INPUT,
} from "./constant";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const updateTodoInput = (payload,value) => ({
  type: UPDATE_TODO_INPUT,
  payload,
});

export const AddTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const RemoveTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});
