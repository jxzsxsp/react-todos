import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../Actions/TodoAction";

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <header className="header">
            <h1>待办事项</h1>
            <input onKeyDown={(e) => {
                if(input.value && e.keyCode === 13) {
                    dispatch(addTodo(input.value))
                    input.value = ''
                }
            }}
                   ref={node => input = node}
                className="edit" placeholder="接下来做什么？" autoFocus />
        </header>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo;