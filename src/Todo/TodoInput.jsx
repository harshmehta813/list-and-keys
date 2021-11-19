import React, { useState } from "react";

function TodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    description: ""
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const onAdd = () => {
    onSubmit(state);
  };
  return (
    <div>
      <div style={{ padding: 4 }}>
        <input
          placeholder="title"
          name="title"
          value={state.title}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ padding: 4 }}>
        <input
          placeholder="description"
          name="description"
          value={state.description}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
