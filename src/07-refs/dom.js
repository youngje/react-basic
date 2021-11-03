// TODO: Add ref to input and call focus() of input element when click button
const TextInput = () => {
  const focusInput = () => {}

  return (
    <div>
      <input type="text" />
      <button onClick={focusInput}>
        Focus
      </button>
    </div>
  );
}

export default TextInput;
