import React, { useReducer, useEffect } from 'react';
import { initialState, todoReducer } from './reducers/todoReducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ThemeSwitch from './components/ThemeSwitch';

const App = () => {
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.getItem('Todos') &&
      dispatch({
        type: 'SET_LOCAL_TODOS',
        payload: localStorage.getItem('Todos')
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    if (todo.length > 0) {
      dispatch({ type: 'ADD_TODO', payload: todo });
    }
  };

  const toggleTodo = todoId => {
    dispatch({ type: 'TOGGLE_TODO', payload: todoId });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_TODOS' });
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
