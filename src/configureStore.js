import { createStore } from 'redux';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import { fetchTodos } from './api';

fetchTodos('all').then(todos => {
  console.log(todos);
});

const addLoggingToDispatch = (store) => {
  const dispatchOriginal = store.dispatch;
  if (!console.group) {
    return dispatchOriginal;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c previous state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const result = dispatchOriginal(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return result;
  };
};

const addPromiseSupportToDispatch = (store) => {
  const dispatchOriginal = store.dispatch;

  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(dispatchOriginal);
    }

    return dispatchOriginal(action);
  };
};

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(todoApp, persistedState);

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.dispatch = addPromiseSupportToDispatch(store);

  // store.subscribe(throttle(() => {
  //   saveState({
  //       todos: store.getState().todos
  //   });
  // }, 1000));

  return store;
}

export default configureStore;
