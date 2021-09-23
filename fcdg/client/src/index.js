import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//stylesheet
import "./index.css";

//components
import Tiles from "./components/tiles/Tiles";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";
import Navigation from "./components/navbar/Navigation";
import Mymodal from "./components/modal/Mymodal";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
              <Tiles />
              <Mymodal />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
