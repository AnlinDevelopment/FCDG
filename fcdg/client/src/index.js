import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//stylesheet
import "./index.css";

//subsites
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";

//components
import Navigation from "./components/navbar/Navigation";
// import Head from "./components/head/Head";
import Tiles from "./components/tiles/Tiles";
import Footer from "./components/footer/Footer";
// import Nav2 from "./components/navbar/Nav2";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Navigation />
        {/* <Nav2 /> */}
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
