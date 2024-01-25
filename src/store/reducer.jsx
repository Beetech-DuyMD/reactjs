import {
  SET_TODO_INPUT,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO_INPUT,
} from "./constant";

const initState = {
  todos: [],
  todoInput: "",
  todoUpdate : ""
};
function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };

    case UPDATE_TODO_INPUT:
        console.log(action.payload);
      return {
        ...state,
        todoUpdate: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      const newTodo = [...state.todos];
      newTodo.splice(action.payload, 1);
      return {
        todos: newTodo,
      };
    default:
      break;
  }
}

export { initState };
export default reducer;
