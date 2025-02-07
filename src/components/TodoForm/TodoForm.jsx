import { useState } from 'react';

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
    <form onSubmit={handleSubmit} className='mb-4'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add a new task'
        />
        <button className='btn btn-primary' type='submit'>
          Add Task
        </button>
      </div>
    </form>
  );
};
