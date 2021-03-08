import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import SavedPodcast from "./pages/SavedPodcast";
import SignUpPage from "./pages/SignUpPage";
import SpotifyComponent from "./Components/SpotifyComponent";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/mypond" component={SavedPodcast} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path={["/spotify", "/redirect"]} component={SpotifyComponent} />
        <Route exact path="*" />
      </Switch>
    </Router>
    
  );
}

export default App;
