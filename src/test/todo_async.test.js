import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../actions';
import * as types from '../actions/action_types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    nock('http://example.com/')
    .get('/todos')
    .reply(200, { body: { todos: ['Task 1'] } });

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['Task 1'] } },
    ];

    const store = mockStore({ todos: [] });
    return store.dispatch(actions.fetchTodos())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
