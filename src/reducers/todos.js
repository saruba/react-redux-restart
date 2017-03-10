import { ADD_TODO, TOGGLE_TODO } from '../actions/action_types';

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text || 'Unnamed task',
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todoId = state.reduce((maxId, t) => Math.max(t.id, maxId), -1) + 1;
      return [
        ...state,
        todo(undefined, { ...action, id: todoId }),
      ];
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action),
      );
    default:
      return state;
  }
};

export default todos;
