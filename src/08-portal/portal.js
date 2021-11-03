import { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = () => ReactDOM.createPortal(
  <div>I am a modal</div>,
  document.body.querySelector('#app')
)

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div onClick={() => setCount(count + 1)}>
      <div>Hello!</div>
      <div>count: {count}</div>
      <Modal />
    </div>
  )
}

export default App
