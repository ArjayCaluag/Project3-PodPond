import React from "react";
import "./style.css";

function PodCastCard() {
  return (
    <div className="card" >
      <img className="card-img-top" src="..." alt="Podcast Thumbnail" />
      <div className="card-body">
        <h5 className="card-title">Podcast Title</h5>
        <p className="card-text">
         Placeholder (description of podcast?)(Or host)
        </p>
        <a href="#" className="btn btn-primary">
          Save to myPond
        </a>
      </div>
    </div>
  )
}


export default PodCastCard