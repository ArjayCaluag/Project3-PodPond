import React from "react";
import "./style.css";

function MyPondJumbotron() {
  return (
    <div className="myPondJumbo">
      <div className="myPond jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="pondh1 display-4 mt-5">My Pond</h1>
          <p className="pondp lead">View your saved podcasts collection below!</p>
        </div>
      </div>
    </div>
  );
}

export default MyPondJumbotron;
