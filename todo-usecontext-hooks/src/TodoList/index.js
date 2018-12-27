import React, {useReducer} from 'react';
import {produce} from 'immer';
import {TodoContext} from './TodoContext';
import TodoView from './TodoView';

const useImmerReducer = (reducer, initialState) => {
  return useReducer(produce(reducer), initialState);
}

const toDoReducer = (todos, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      todos.push({text: action.text, completed: false});
      return;
    case 'TOGGLE_COMPLETE':
      todos[action.i].completed = !todos[action.i].completed;
      return;
    case 'RESET':
      return [];
    default:
      return todos;
  }
}

export default () => {
  const [todos, dispatch] = useImmerReducer(toDoReducer, []);
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <TodoView />
    </TodoContext.Provider>
  );
};
