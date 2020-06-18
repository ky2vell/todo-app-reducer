import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, clearCompleted }) => {
  return (
    <>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </>
  );
};

export default TodoList;
