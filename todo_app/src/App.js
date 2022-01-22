import react, { useState } from "react";
import reactDom from "react-dom";

let globalId = 0;

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();

    if (task === "") return todos;

    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  function deleteItem(itemId) {
    setTodos((oldTodos) => {
      oldTodos.filter((item) => item.id !== itemId);
    });
  }

  return (
    <div>
      <h1>Todo List App</h1>

      <h2>Enter a new task:</h2>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button type="submit">Create Todo</button>
      </form>

      <h2>Todo List</h2>
      <ul>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <li>
                {item.todo} ({item.id})
              </li>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
