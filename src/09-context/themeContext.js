import { createContext, useContext } from 'react';

const ThemeContext = createContext('green');

function App() {
  return (
    <ThemeContext.Provider value="blue">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const useThemeContext = () => {
  const theme = useContext(ThemeContext)
  return theme
}

const ThemedButton = () => {
  const theme = useThemeContext()
  return (
    <button className={`button-${theme}`}>
      button
    </button>
  )
}

export default App;
