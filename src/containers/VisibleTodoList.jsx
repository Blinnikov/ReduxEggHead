import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';


const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
});

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   }
// });

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    // mapDispatchToProps
    { onTodoClick: toggleTodo }
  )(TodoList)
);

export default VisibleTodoList;
