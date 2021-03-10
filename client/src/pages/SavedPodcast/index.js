import React from "react";

import PodCastCard from "../../Components/PodcastCard";
import LandingPage from "../LandingPage";
import MyPondJumbotron from "../../Components/myPondJumbotron";
import SavedPodcastCard from "../../Components/SavedPodcastCard";

function SavedPodcast(props) {

  if (props.userObject.loggedIn) {
    return (
      <div>
      <MyPondJumbotron/>
      <SavedPodcastCard/>
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
