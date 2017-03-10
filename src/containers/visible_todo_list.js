import { connect } from 'react-redux';
import { toggleTodo } from '../actions/';
import TodoList from '../components/todo_list';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispachToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispachToProps,
)(TodoList);

export default VisibleTodoList;
