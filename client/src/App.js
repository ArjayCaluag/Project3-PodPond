import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron"
import PodCastCard from "./Components/PodcastCard"
import SearchBar from "./Components/SearchBar"
import CommentSection from "./Components/Comments"


function App() {
  return (
    <Router>
      <NavBar/>
      <Jumbotron/>
      <SearchBar/>
      <PodCastCard/>
      <CommentSection/>
      
      <Switch>
        <Route exact path={["/search", "/"]}  />
        <Route exact path="/mypond"  />
        <Route exact path="*"  />
      </Switch>
    </Router>
  );
}

export default App;