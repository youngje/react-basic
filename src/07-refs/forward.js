import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';

function AutoFocusTextInput() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return <ForwaredTextInput ref={inputRef} />;
}

function TextInput(props, ref) {
  const textInput = useRef(null);

  const focusInput = () => {
    textInput.current.focus();
  }

  useImperativeHandle(ref, () => ({
    focus: focusInput
  }))

  return (
    <div>
      <input
        type="text"
        ref={textInput}
      />
      <button onClick={focusInput}>
        Focus
      </button>
    </div>
  );
}

const ForwaredTextInput = forwardRef(TextInput)

export default AutoFocusTextInput;
