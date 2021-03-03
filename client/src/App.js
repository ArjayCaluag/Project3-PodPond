import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <Router>
      <Switch>
        <NavBar/>
        <Route exact path={["/search", "/"]}  />
        <Route exact path="/mypond"  />
        <Route exact path="*"  />
      </Switch>
    </Router>
  );
}

export default App;