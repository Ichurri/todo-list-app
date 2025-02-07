import { useState } from 'react';
import './TodoForm.css';

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button className="todo-submit-btn" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};
