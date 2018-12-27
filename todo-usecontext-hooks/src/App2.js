import React, {useReducer, useContext, createContext} from 'react';
import {produce} from 'immer';
import Form from './Form2';
import './App.css';

// createContext return {Provider, Consumer}
const NumberContext = createContext();

const DisplayNumber = () => {
  const value = useContext(NumberContext);
  return (
    <div>The number value: {value}</div>
  );
};

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

/*
const toDoReducer = (todos, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      // produce of Immer will copy todos to newTodos and then add another todo to create new array
      return produce(todos, (newTodos) => {
        newTodos.push({text: action.text, completed: false}); // or use Array.unshift if pushing on top
      });
    case 'TOGGLE_COMPLETE':
      return produce(todos, (newTodos) => {
        newTodos[action.i].completed = !newTodos[action.i].completed;
      });
    case 'RESET':
      return [];
    default:
      return todos;
  }
}
*/

const App = () => {
  // const [todos, dispatch] = useReducer(toDoReducer, []);
  const [todos, dispatch] = useImmerReducer(toDoReducer, []);
  return (
    <div className="App">
      <NumberContext.Provider value={999}>
        <DisplayNumber />
      </NumberContext.Provider>
      <Form dispatch={dispatch} />
      <div>
        {todos.map(({text, completed}, index) => (
          <div
            key={index}
            onClick={() => dispatch({type: 'TOGGLE_COMPLETE', i: index})}
            style={{textDecoration: (completed ? 'line-through' : 'none')}}>
            {text}
          </div>
        ))}
      </div>

      <button onClick={() => dispatch({type: 'RESET'})} >Reset</button>
    </div>
  );
};

export default App;
