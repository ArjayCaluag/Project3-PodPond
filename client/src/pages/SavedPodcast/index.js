import React, { useState, useEffect } from "react";
import LandingPage from "../LandingPage";
import MyPondJumbotron from "../../Components/myPondJumbotron";
import SavedPodcastCard from "../../Components/SavedPodcastCard";
import API from "../../utils/API";

function SavedPodcast(props) {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    loadPodcasts();
  }, []);

  function loadPodcasts() {
    API.getPodcasts()
      .then(res => setPodcasts(res.data.saved))
      .catch(err => console.log(err));
  }

  function deletePodcast(podcast) {
    console.log("Podcast id:", podcast._id);
    const podcastId = podcast._id;
    API.deletePodcast(podcastId)
      .then(() => loadPodcasts())
      .catch((err) => console.log(err));
  }

  if (props.userObject.loggedIn) {
    return (
      <div>
        <MyPondJumbotron />
        {podcasts.map((podcast, index) => {
          return <SavedPodcastCard
            userObject={props.userObject}
            podcast={podcast}
            key={index}
            onClick={deletePodcast}
            image={podcast.image}
            title={podcast.title}
            publisher={podcast.publisher}
            link={podcast.link}
          />
        })}
      </div>
    );
  } else {
    console.log("User not authenticated, redirect to login React-route");
    window.location.href = "/";
    return (
      <LandingPage userObject={props.userObject} setUserObject={props.setUserObject} />
    );
  }
}

export default SavedPodcast;
