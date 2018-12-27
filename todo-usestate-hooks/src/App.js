import React, {useState} from 'react';
import Form from './Form';
import './App.css';


const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) => {
    const newTodos = todos.map((todo, k) => {
      return (k === i) ? {...todo, completed: !todo.completed} : todo
    });
    setTodos(newTodos);
  };

  const onSubmit = text => setTodos([{text, completed: false}, ...todos]);

  return (
    <div className="App">
      <Form onSubmit={onSubmit} />
      <div>
        {todos.map(({text, completed}, index) => (
          <div
            key={text}
            onClick={() => toggleComplete(index)}
            style={{textDecoration: (completed ? 'line-through' : 'none')}}>
            {text}
          </div>
        ))}
      </div>

      <button onClick={() => setTodos([])} >Reset</button>
    </div>
  );
};

export default App;
