import { useState } from "react";

const initialFormValues = {
  text: "",
  completed: false,
};

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const addTodo = () => {
    const todo = {id: Date.now(), ...formValues};
    setTodos([...todos, todo]);
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <div>
        <input
          value={formValues.text}
          onChange={(e) =>
            setFormValues({ ...formValues, text: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={formValues.completed}
          onChange={() =>
            setFormValues({ ...formValues, completed: !formValues.completed })
          }
        /> completed
      </div>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
