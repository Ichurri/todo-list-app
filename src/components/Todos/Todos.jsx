import { TodoItem } from "../TodoItem";

export const Todos = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
