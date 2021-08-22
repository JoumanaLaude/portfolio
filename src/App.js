import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RecentProjects from './components/Landing/RecentProjects';
import './App.css';

function App() {
  return (
    <>
      <div className="landing-grid">
        <Navbar />
        <Landing />
      </div>
      <RecentProjects />
    </>
  );
}

export default App;
