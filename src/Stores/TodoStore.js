import { todos } from '../Reducers/TodoReducer';
import { createStore } from 'redux';

const defaultTodos = [
];

const store = createStore(todos, defaultTodos);

export default store;