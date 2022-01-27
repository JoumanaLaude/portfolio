import React, { useEffect } from "react";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/ProjectPage";
import About from "./components/About/About";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

function App() {

  useEffect(() => {
    ReactGA.initialize("UA-218438232-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <BrowserRouter>
      <main className="main-grid">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
