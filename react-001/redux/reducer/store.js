import {createStore} from 'redux';
import todos from './todo';
import {addTodo} from '../action/action';

let store = createStore(todo,[]);

store.dispatch(addTodo('dddd'));

console.log('$$$$$$'+store.getState().type+'$$$$$$'+store.getState().id+'$$$$$'+store.getState().text+'$$$$$');

export default store;
