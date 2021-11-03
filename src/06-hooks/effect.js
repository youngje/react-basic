import { useState, useEffect } from 'react';

// TODO4: Log steps 👀
function Example() {
  console.log('1. component render start!');

  const [count, setCount] = useState(0);
  const [toggleCounter, setToggleCounter] = useState(true);

  // TODO2: Update title only if count changed
  // TODO3: Do not update title if count is bigger than 10
  useEffect(() => {
    console.log('3. effect start!');
    if (count > 10) return undefined;

    document.title = `You clicked ${count} times`;
    console.log('title updated');

    return () => {
      console.log('4. effect clear!');
      document.title = 'clear!';
    }
  }, [count]);

  console.log('2. Virtual DOM render!');
  return (
    <div>
      {/* TODO1: Toggle counter */}
      <button onClick={() => setToggleCounter((prev) => !prev)}>
        Toggle counter
      </button>
      {toggleCounter && (
        <>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </>
      )}
    </div>
  );
}

export default Example;
