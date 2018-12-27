import React, { useState, useEffect } from 'react';
import './App.css';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const dataResponse = await response.json();
    const [person] = dataResponse.results;
    setData(person);
    setLoading(false);
  }, []);

  return {data, loading};
};

const App = () => {
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch(`https://api.randomuser.me/`);

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {loading ?
        <div>loading...</div> :
        <div>{data.name.first + ' ' + data.name.last}</div>
      }
    </div>
  );
}

export default App;
