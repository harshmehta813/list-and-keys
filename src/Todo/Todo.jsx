import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const [list, setList] = useState([]);

  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: list.length + 1,
      title,
      description,
      status: true
    };
    setList([...list, payload]);
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    const updatedTodos = list.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setList(updatedTodos);
  };

  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList
        data={list}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default Todo;
