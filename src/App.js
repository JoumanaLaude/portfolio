import React, { useEffect } from 'react';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGa from 'react-ga';

function App() {

  useEffect(() => {
    ReactGa.initialize('G-NDY5L9KWJH')

    ReactGa.pageview('/')
  }, [])

  return (
    <BrowserRouter>
      <main className="main-grid">
        <Main />
      </main>
    </BrowserRouter>
  );
}

export default App;
