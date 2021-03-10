import React from "react";
import "./style.css";

function SavedPodcastCard(props) {
  return (
    <div className="container savedPodcast">
      <div className="card w-100">
        <img
          className="card-img-top"
          src={props.image}
          alt="Podcast Thumbnail"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.publisher}</p>
          <a
            className="btn btn-success mt-auto"
            rel="noopener noreferrer"
            target="_blank"
            href={props.link}
          >
            View on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div> */
}

export default SavedPodcastCard;
