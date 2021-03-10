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
        {/* turn element below into a button that will save to database onClick. Use google books as example */}
        <button onClick={() => props.onClick(props.podcast)} className="btn btn-primary">
          Save to myPond
        </button>
      </div>
    </div>
  )
}


export default PodCastCard