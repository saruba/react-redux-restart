import fetch from 'isomorphic-fetch';

import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE } from './action_types';

export const addTodo = (text) => {
  const result = {
    type: ADD_TODO,
    text,
  };
  return result;
};

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

export const fetchTodosSucces = body => ({
  type: FETCH_TODOS_SUCCESS,
  body,
});

export const fechTodoFailure = ex => ({
  type: FETCH_TODOS_FAILURE,
  ex,
});

export function fetchTodos() {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch('http://example.com/todos')
    .then(res => res.json())
    .then(json => dispatch(fetchTodosSucces(json.body)))
    .catch(ex => dispatch(fechTodoFailure(ex)));
  };
}
