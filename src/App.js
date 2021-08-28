import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="landing-grid">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' />
          </Switch>
        </Router>
        <Landing />
      </div>
    </>
  );
}

export default App;
