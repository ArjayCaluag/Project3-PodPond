import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="search jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 mt-5">PodPond</h1>
        <p className="lead">
         Search for your favorite podcasts and store them in your pond!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
