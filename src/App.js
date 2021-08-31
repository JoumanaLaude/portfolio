import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="main-grid">
        <Main />
      </main>
    </BrowserRouter>
  );
}

export default App;
