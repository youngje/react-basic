import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const increaseFunctional = () => {};

  return (
    <div className="set-state">
      <div>Current Count: {count}</div>
      <p>
        <button onClick={increase}>increase + 1</button>
        <button onClick={increaseFunctional}>increaseFunctional + 1</button>
      </p>
    </div>
  )
}

export default Counter;
