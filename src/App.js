import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <div className="landing-grid">
        <Navbar />
        <Landing />
      </div>
    </>
  );
}

export default App;
