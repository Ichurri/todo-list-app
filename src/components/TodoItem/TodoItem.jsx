
export const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span
          className="form-check-label"
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            opacity: todo.completed ? 0.5 : 1
          }}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};