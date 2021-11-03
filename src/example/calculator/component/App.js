import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

export default function App() {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { next, total } = state;

  const onClickButton = (buttonName) => {
    setState((prevState) => calculate(prevState, buttonName));
  }

  return (
    <div className="component-app">
      <Display
        value={next || total || '0'}
      />
      <ButtonPanel onClickButton={onClickButton} />
    </div>
  );
}
