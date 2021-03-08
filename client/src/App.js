import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import SavedPodcast from "./pages/SavedPodcast";
import SignUpPage from "./pages/SignUpPage";
import SpotifyPage from "./pages/SpotifyPage";

function App() {
  const [userObject, setUserObject] = useState({});
  
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/mypond" component={SavedPodcast} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/spotifylogin" component = {SpotifyPage} />
        <Route exact path="*" />
      </Switch>
    </Router>
  );



}

export default App;
