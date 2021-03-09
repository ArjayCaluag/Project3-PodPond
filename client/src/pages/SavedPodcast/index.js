import React from "react";
import Jumbotron from "../../Components/Jumbotron";
import PodCastCard from "../../Components/PodcastCard";
import LandingPage from "../LandingPage";

function SavedPodcast(props) {

  if (props.userObject.loggedIn) {
    return (
      <div>
      <Jumbotron/>
      <h1> View your saved podcast below!</h1>
      <PodCastCard/>
    </div>
    );
  } else {
      console.log("User not authenticated, redirect to login React-route");
      window.location.href = "/";
      return (
        <LandingPage userObject={props.userObject} setUserObject={props.setUserObject}/>
      );
  }
}

export default SavedPodcast;
