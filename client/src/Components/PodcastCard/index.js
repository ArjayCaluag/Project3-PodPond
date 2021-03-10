import React from "react";
import "./style.css";

function PodCastCard(props) {
  return (
    <div className="card podcastCard" >
      <img className="card-img-top" src={props.image} alt="Podcast Thumbnail" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
         {props.publisher}
        </p>
        <a className="btn btn-success mt-auto" rel="noopener noreferrer" target="_blank" href={props.link}>
          View on Spotify
        </a>
        <button onClick={() => props.onClick(props.podcast)} className="btn btn-primary">
          Save to MyPond
        </button>
      </div>
    </div>
  )
}


export default PodCastCard
