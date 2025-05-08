import {UPDATE_TODO} from './../types/todotypes';
import {ADD_TODO, REMOVE_TODO} from '../types/todotypes';

export const addTodo = (todo: object) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const removeTodo = (id: string) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
export const updateTodo = ( todo: object) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
