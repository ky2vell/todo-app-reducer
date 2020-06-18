import React from 'react';
import './Todo.css';

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li
      className={`todo${todo.completed ? ' completed' : ''}`}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.completed && <i className='fas fa-check'></i>}
      {todo.task}
    </li>
  );
};

export default Todo;
