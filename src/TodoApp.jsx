import React from 'react';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import store from './store';
import getVisibleTodos from './reducers/get-visible-todos';

let nextTodoId = 0;

const TodoApp = ({ todos, visibilityFilter }) => {
  return (
    <div>
      <AddTodo onAddClick={text =>
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
          })
        } />
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={
          id => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            });
          }
        } />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={filter =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      />
    </div>
  );
}

export default TodoApp;
