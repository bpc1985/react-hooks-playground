import React, {useContext} from "react";
import {TodoContext} from './TodoContext';

export default () => {
  const {todos, dispatch} = useContext(TodoContext);
  return (
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
  );
};