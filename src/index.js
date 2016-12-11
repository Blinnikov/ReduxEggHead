import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp'
import './index.css';

import store from './store';

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
