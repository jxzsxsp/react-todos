import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from  '../Components/TodoList';
import { toggleTodo } from "../Actions/TodoAction";
import getVisibleTodos from '../Selectors/TodoSelector';

const mapStateToProps = (state, {match}) => ({
    todos: getVisibleTodos(
        state,
        match.params.filter || "all"
    )
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
})

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList;