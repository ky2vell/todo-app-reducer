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
    default:
      return state;
  }
};
