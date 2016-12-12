import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App'
import { createStore } from 'redux';
import todoApp from './reducers';

const persistedState = {
  todos: [{
    id: '0',
    text: 'From persisted storage',
    completed: false
  }]
};

const store = createStore(todoApp, persistedState);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
