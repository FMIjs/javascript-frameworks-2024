import { createContext } from 'react';
import './App.css';
import Routes from './Routes';

export const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="red">
      <Routes />
    </ThemeContext.Provider>
  );
}

export default App;
