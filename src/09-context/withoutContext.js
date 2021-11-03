function App() {
  return <Toolbar theme="green" />;
}

function Toolbar({ theme }) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={theme} />
    </div>
  );
}

const ThemedButton = ({ theme }) => (
  <button className={`button-${theme}`}>
    button
  </button>
)

export default App;
