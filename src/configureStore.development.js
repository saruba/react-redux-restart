import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore() {
  return createStore(
    todoApp,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
}
/* eslint-enable */
