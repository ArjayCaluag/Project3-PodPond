import React from "react";
import "./style.css";

function SavedPodcastCard(props) {
  return (
    <div className="container savedPodcast">
      <div className="card savedCard">
        <div className="row no-gutters">
          <div className="col-sm-5">
            <img alt="Podcast thumbnail" src={props.image} className="card-img-thumbnail savedImg"></img>
          </div>

          <div className="col-sm-7">
            <div className="card-body">
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
              <button onClick={() => props.onClick(props.podcast)} className="btn btn-danger">
                Delete Book from MyPond
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedPodcastCard;
