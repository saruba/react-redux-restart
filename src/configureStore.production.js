import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';

export default function configureStore() {
  // const reducer = combineReducers({
  //   todoApp,
  // });
  return createStore(
    todoApp,
    applyMiddleware(thunk),
  );
}
