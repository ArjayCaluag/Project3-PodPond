import React from "react";
import Jumbotron from "../../Components/Jumbotron";
import PodCastCard from "../../Components/PodcastCard";

function SavedPodcast(props) {
  return (
    <div>
      <Jumbotron/>
      <h1> View your saved podcast below!</h1>
      <PodCastCard/>
    </div>
  );
}

export default SavedPodcast;
