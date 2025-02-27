import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const decrementValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={decrementValue}>Decrement</button>
    </>
  );
}

export default App;
