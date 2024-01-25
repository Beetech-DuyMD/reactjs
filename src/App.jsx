import { useRef, useState } from "react";
import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { todoInput, todos, todoUpdate } = state;

  const todoRef = useRef();
  const hadnleSubmit = (todoInput) => {
    dispatch(actions.AddTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    todoRef.current.focus();
  };

  const [isEdit, setIsEdit] = useState(false);
  const [indexUpdate, setindexUpdate] = useState();
  const hadnleUpdate = (index) => {
    setIsEdit(!isEdit);
    setindexUpdate(index);
  };
  const handleChange = (e) => {
    dispatch(actions.updateTodoInput(e.target.value));
  };
  return (
    <>
      <input
        ref={todoRef}
        value={todoInput}
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={() => hadnleSubmit(todoInput)}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            {isEdit && index === indexUpdate ? (
              <input
                value={todo}
                onChange={(e) => dispatch(actions.updateTodoInput(e.target.value))}
              />
            ) : (
              <li>{todo}</li>
            )}
            <button onClick={() => hadnleUpdate(index)}>Sửa</button>
            <button onClick={() => dispatch(actions.RemoveTodo(index))}>
              X
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
