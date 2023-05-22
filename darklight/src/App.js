import './App.css';
import Layout from "./components/Layout"
import { ThemeProvider } from './context.js/useTheme';
function App() {
  

  return (
    <div className="App">
      <ThemeProvider>
      <Layout/>
      </ThemeProvider>
    </div>
  );
}

export default App;
