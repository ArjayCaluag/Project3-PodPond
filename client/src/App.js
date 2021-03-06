import React, { Component } from "react";
import * as $ from "jquery";
import {  scopes } from "./utils/config";
import hash from "./utils/hash";
import Player from "./utils/player";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron";
import PodCastCard from "./Components/PodcastCard";
import SearchBar from "./Components/SearchBar";
import CommentSection from "./Components/Comments";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import SavedPodcast from "./pages/SavedPodcast";
import SignUpPage from "./pages/SignUpPage";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/mypond" component={SavedPodcast} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="*" />
      </Switch>
    </Router>
  );



}

export default App;
