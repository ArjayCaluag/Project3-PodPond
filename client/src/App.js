import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron"


function App() {
  return (
    <Router>
      <NavBar/>
        <Jumbotron/>
      <Switch>
      
        <Route exact path={["/search", "/"]}  />
        <Route exact path="/mypond"  />
        <Route exact path="*"  />
      </Switch>
    </Router>
  );
}

export default App;