import React, { useMemo } from 'react';
import { TodoForm, TodoList} from './components';
import { useLocalStorage } from './hooks';
import './App.css';

export const App = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const remainingTodos = useMemo(() => 
    todos.filter(todo => !todo.completed).length
  , [todos]);

  const addTodo = (text) => {
    setTodos(prev => [...prev, {
      id: Date.now(),
      text,
      completed: false
    }]);
  };

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className='app-container'>
      <div className='todo-card'>
        <h1 className='app-title'>Todo List</h1>
        <div className='todo-counter'>
          Pending Tasks: { remainingTodos }
        </div>
        <TodoForm addTodo={ addTodo } />
        <TodoList 
          todos={ todos }
          toggleComplete={ toggleComplete }
          deleteTodo={ deleteTodo }
        />
      </div>
    </div>
  );
}