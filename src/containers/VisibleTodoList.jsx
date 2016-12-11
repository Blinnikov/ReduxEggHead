import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import getVisibleTodos from '../reducers/get-visible-todos';
import toggleTodo from '../action-creators/toggle-todo';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
