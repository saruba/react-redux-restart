import reducer from '../reducers/todos';
import * as types from '../actions/action_types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
    .toEqual([]);
  });
  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Task 1',
      }))
    .toEqual(
      [
        {
          text: 'Task 1',
          completed: false,
          id: 0,
        },
      ],
    );

    expect(
      reducer(
        [{
          text: 'Task 1',
          completed: false,
          id: 0,
        }],
        {
          type: types.ADD_TODO,
          text: 'Task 2',
        }))
        .toEqual([
          {
            text: 'Task 1',
            completed: false,
            id: 0,
          },
          {
            text: 'Task 2',
            completed: false,
            id: 1,
          },
        ]);
  });
});
