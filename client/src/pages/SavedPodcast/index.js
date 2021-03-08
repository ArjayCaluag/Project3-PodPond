import React from "react";
import Jumbotron from "../../Components/Jumbotron";
import NavBar from "../../Components/NavBar";
import PodCastCard from "../../Components/PodcastCard";

function SavedPodcast() {
  return (
    <div>
      <Jumbotron/>
      <h1> View your saved podcast below!</h1>
      <PodCastCard/>
    </div>
  );
}

export default SavedPodcast;
