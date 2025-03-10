import { TodoItem }from '../TodoItem';
import './TodoList.css';

export const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {
        todos.map(todo => (
          <TodoItem
            key={ todo.id }
            todo={ todo }
            toggleComplete={ toggleComplete }
            deleteTodo={ deleteTodo }
          />
        ))
      }
    </ul>
  );
};
