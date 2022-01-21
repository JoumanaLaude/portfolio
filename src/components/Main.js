import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Projects from "./Projects/ProjectPage";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Landing />
            );
        };

        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Redirect to="/" />
                </Switch>
            </>
        );
    }
}

export default Main;
