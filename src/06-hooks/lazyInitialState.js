import { useState } from 'react';

function someExpensiveComputation(props) {
  console.log('expensive!!!!!!!!!!!');
  const initialState = 0;
  return initialState;
}

// TODO: lazy initial state
function LazyInitialState(props) {
  const initialState = someExpensiveComputation(props);
  const [state, setState] = useState(initialState);

  return (
    <div>
      Current Count: {state}
      <p>
        <button onClick={() => setState(state + 1)}>
          UPDATE
        </button>
      </p>
    </div>
  );
}

export default LazyInitialState;
