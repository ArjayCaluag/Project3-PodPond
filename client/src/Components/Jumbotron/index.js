import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="search jumbotron jumbotron-fluid">
      <div className="jumbo-container">
        <h1 className=" jumbo-h1 display-4 mt-5">PodPond</h1>
        <p className="jumbo-p lead">
         Search for your favorite podcasts and store them in your pond!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
