import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp'
import { createStore } from 'redux';
import todoApp from './reducers/todo-app';

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
