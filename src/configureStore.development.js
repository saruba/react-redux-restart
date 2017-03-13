import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';

/* eslint-disable no-underscore-dangle */
export default function configureStore() {
  return createStore(
    todoApp,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
    ),
  );
}
/* eslint-enable */
