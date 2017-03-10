import * as actions from '../actions';
import * as types from '../actions/action_types';

describe('actions', () => {
  it('should create an action to do add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
