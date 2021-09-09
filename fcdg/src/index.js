import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/home/Home.js";
import Navigation from "./components/navbar/Navigation";
import reportWebVitals from "./reportWebVitals";
import Test from "./components/tiles/test"
// import Tile from "./components/tiles/Tiles";





ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <body>
      <Home/>
    </body>
    <Test/>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
