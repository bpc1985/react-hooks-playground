import React, {useContext, useState} from 'react';
import {TodoContext} from './TodoContext';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue('')
  };
}

export default React.memo(() => {
  const {dispatch} = useContext(TodoContext);
  const {resetValue, ...text} = useInputValue('');

  console.log('<Form /> is rendering...');
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({type: 'ADD_TODO', text: text.value});
      resetValue();
    }}>
      <input {...text} />
    </form>
  );
});