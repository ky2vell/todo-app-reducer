import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ThemeSwitch from './components/ThemeSwitch';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

const App = () => {
  const [todos, setTodos] = useState(todoData);

  useEffect(() => {
    localStorage.getItem('Todos') &&
      setTodos(JSON.parse(localStorage.getItem('Todos')));
  }, []);

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e, todo) => {
    e.preventDefault();
    if (todo.length > 0) {
      const newTodo = {
        task: todo,
        id: Date.now(),
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = todoId => {
    setTodos(
      todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  const clearCompleted = e => {
    e.preventDefault();
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className='container'>
      <ThemeSwitch />
      <h1>Welcome to your Todo App!</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
