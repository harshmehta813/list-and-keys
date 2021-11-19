function TodoList({ data, handleDelete, handleToggle }) {
  return (
    <ul>
      {data.map((item) => (
        <div>
          <li key={item.id}>
            {item.title} - {item.description} -{" "}
            {item.status ? "DONE" : "PENDING"}
          </li>
          <button
            className="deleteBtn"
            onClick={() => handleDelete(item.id)}
          ></button>
          <button
            className="toggleBtn"
            onClick={() => handleToggle(item.id)}
          ></button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
