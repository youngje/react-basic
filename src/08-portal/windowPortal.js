import { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import copyStyles from './copyStyles';

function MyWindowPortal({ children, closeWindowPortal }) {
  const containerElRef = useRef(null);

  if (!containerElRef.current) {
    // STEP 1: create an empty div
    containerElRef.current = document.createElement('div');
  }

  useEffect(() => {
    const containerEl = containerElRef.current

    // STEP 3: open a new browser window
    const externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

    // STEP 4: append the container <div> to the body of the new window
    externalWindow.document.body.appendChild(containerEl);

    externalWindow.document.title = 'A React portal window';
    copyStyles(document, externalWindow.document);

    // update the state in the parent component if the user closes the new window
    externalWindow.addEventListener('beforeunload', closeWindowPortal);

    // store containterEl to ref
    containerElRef.current = containerEl;

    // This will fire when showWindowPortal in the parent component becomes false
    // So we tidy up by just closing the window
    return () => {
      externalWindow.close();
    }
  }, [closeWindowPortal])

  // STEP 2: draw children to containerEl
  return ReactDOM.createPortal(children, containerElRef.current);
}

function App() {
  const [count, setCount] = useState(0);
  const [showWindowPortal, setShowWindowPortal] = useState(false);

  const toggleWindowPortal = useCallback(() => {
    setShowWindowPortal(prev => !prev);
  }, [])

  const closeWindowPortal = useCallback(() => {
    setShowWindowPortal(false);
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      window.clearInterval(interval);
      closeWindowPortal();
    }
  }, [closeWindowPortal])

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={toggleWindowPortal}>
        {showWindowPortal ? 'Close the' : 'Open a'} Portal
      </button>

      {showWindowPortal && (
        <MyWindowPortal closeWindowPortal={closeWindowPortal}>
          <h1>Counter in a portal: {count}</h1>
          <p>Even though I render in a different window, I share state!</p>

          <button onClick={() => closeWindowPortal()}>
            Close me!
          </button>
        </MyWindowPortal>
      )}
    </div>
  );
}

export default App;
