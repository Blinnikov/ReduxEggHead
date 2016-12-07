import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './Counter';
import './index.css';

import { createStore } from 'redux';
import counter from './reducers/counter';
// import { addCounter, removeCounter } from './reducers/counter-list';
import { toggleTodo } from './reducers/tests/todos.tests';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    // <App />,
    <Counter value={store.getState()}
      onIncrement={() => store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={
        () => store.dispatch({
          type: 'DECREMENT'
        })
      }
      />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
