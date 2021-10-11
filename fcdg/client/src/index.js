import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//stylesheet
import "./index.css";

//components
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";
import Navigation from "./components/navbar/Navigation";
import Head from "./components/head/Head";
import Tiles from "./components/tiles/Tiles";
import Footer from "./components/footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Navigation />
        {/* <Head /> */}
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
              <Tiles />
              <Footer />
            </Route>
            <Route path="/admin">
              <Admin />
              <Footer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
