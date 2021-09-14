import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Test from "./components/tiles/test";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Navigation from "./components/navbar/Navigation"
import Home from "./components/home/Home"


import Tile from './components/tiles/Tile';

// import Tile from "./components/tiles/Tiles";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
              {/* <Test /> */}
              <Tile />
            </Route>
            <Route path="/admin">
              <Admin />
              <Test />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
