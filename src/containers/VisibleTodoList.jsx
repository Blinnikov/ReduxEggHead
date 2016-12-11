import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import getVisibleTodos from '../reducers/get-visible-todos';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => dispatch({type: 'TOGGLE_TODO', id })
  };
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
