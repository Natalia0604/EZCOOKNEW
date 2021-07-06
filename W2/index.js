import "./HomePage.css";
import "./ListPage.css"
import React from "react";
import ReactDOM from 'react-dom';
import ListPage from "./components/ListPage.js";
import HomePage from "./components/HomePage.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
        <Route path="/" exact component={HomePage}/>
        <Route path="/list" component={ListPage}/>
    </Router>
  </>,
  document.getElementById("root")
);