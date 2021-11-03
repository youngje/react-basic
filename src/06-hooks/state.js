// TODO: add state
function Counter() {
  let count = 0;

  const increase = () => { count += 1; };

  return (
    <div className="set-state">
      <div>Current Count: {count}</div>
      <p>
        <button onClick={increase}>increase</button>
      </p>
    </div>
  )
}

export default Counter;
