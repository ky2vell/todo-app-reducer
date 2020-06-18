import React, { useReducer, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ThemeSwitch from './components/ThemeSwitch';
import { initialState, todoReducer } from './reducers/todoReducer';

const App = () => {
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.getItem('Todos') &&
      dispatch({
        type: 'SET_TODOS',
        payload: JSON.parse(localStorage.getItem('Todos'))
      });
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
      dispatch({ type: 'SET_TODOS', payload: [...todos, newTodo] });
    }
  };

  const toggleTodo = todoId => {
    const toggledTodo = todos.map(todo => {
      if (todoId === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    dispatch({
      type: 'SET_TODOS',
      payload: toggledTodo
    });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: 'SET_TODOS',
      payload: todos.filter(todo => !todo.completed)
    });
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
