import { combineReducers } from 'redux';
import todos, * as todoSelectors from './todos';

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// }

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] = reducers[key](state[key], action)
//       },
//       {}
//     )
//   };
// };

const todoApp = combineReducers({
  todos
});

export default todoApp;

export const getVisibleTodos = (state, filter) =>
  todoSelectors.getVisibleTodos(state.todos, filter);
