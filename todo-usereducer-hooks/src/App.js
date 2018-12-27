import React, {useReducer} from 'react';
import Form from './Form';
import './App.css';

const toDoReducer = (todos, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [{text: action.text, completed: false}, ...todos];
    case 'TOGGLE_COMPLETE':
      return todos.map((todo, k) => {
        return (k === action.i) ? {...todo, completed: !todo.completed} : todo
      });
    case 'RESET':
      return [];
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(toDoReducer, []);
  return (
    <div className="App">
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
