import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Resume from "./components/Resume.js";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar className="NavBar" />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
        <Route component={Resume} path="/resume" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
