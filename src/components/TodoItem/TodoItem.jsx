import { memo } from 'react';
import './TodoItem.css';

export const TodoItem = memo(({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={ `todo-item ${ todo.completed ? 'completed' : '' }` }>
      <div className='todo-content'>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ () => toggleComplete(todo.id) }
          className='todo-checkbox'
        />
        <span className='todo-text'>{ todo.text }</span>
      </div>
      <button
        className='delete-btn'
        onClick={ () => deleteTodo(todo.id) }
      >
        Delete
      </button>
    </li>
  );
});
