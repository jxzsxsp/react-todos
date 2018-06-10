import React, { Component } from 'react';
import AddTodo from '../Containers/AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import todos from '../Stores/todos';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList todos={todos}/>
                <Footer/>
            </div>
        );
    }
}

export default TodoApp;