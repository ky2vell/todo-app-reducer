import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleChanges = e => {
    setTodo(e.target.value);
  };

  const submitTodo = e => {
    e.preventDefault();
    addTodo(e, todo);
    setTodo('');
  };

  return (
    <form onSubmit={submitTodo} autoComplete='off'>
      <input
        id='submit'
        type='text'
        value={todo}
        name='todo'
        placeholder='Enter Your Todo!'
        onChange={handleChanges}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
