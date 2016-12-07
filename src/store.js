import { createStore } from 'redux';
import todoApp from './reducers/todo-app';

const store = createStore(todoApp);
export default store;
