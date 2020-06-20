export const initialState = {
  todos: [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Mow Lawn',
      id: 1528817077287,
      completed: false
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case 'CLEAR_TODOS':
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return !todo.completed;
        })
      };
    default:
      return state;
  }
};
