import React from "react";
import "./style.css";

function SavedPodcastCard(props) {
  return (
    <div className="container savedPodcast">
<<<<<<< HEAD
      <div class="card savedCard">
        <div className="row no-gutters">
          <div class="col-sm-5">
            <img src={props.image} class="card-img-thumbnail savedImg"></img>
          </div>

          <div class="col-sm-7">
            <div class="card-body">
=======
      <div className="card savedCard">
        <div className="row no-gutters">
          <div className="col-sm-5">
            <img alt="Podcast thumbnail" src={props.image} className="card-img-thumbnail savedImg"></img>
          </div>

          <div className="col-sm-7">
            <div className="card-body">
>>>>>>> 5dad96919ef38daf3d5e034fc2b63165b17ae548
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
<<<<<<< HEAD
=======
              <button onClick={() => props.onClick(props.podcast)} className="btn btn-danger">
                Delete Book from MyPond
              </button>
>>>>>>> 5dad96919ef38daf3d5e034fc2b63165b17ae548
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
{
  /* <div class="bs-example">
    <div class="card" style="max-width: 500px;">
        <div class="row no-gutters">
            <div class="col-sm-5" style="background: #868e96;">
                <img src="/examples/images/sample.svg" class="card-img-top h-100" alt="...">
            </div>
            <div class="col-sm-7">
                <div class="card-body">
                    <h5 class="card-title">Alice Liddel</h5>
                    <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                    <a href="#" class="btn btn-primary stretched-link">View Profile</a>
                </div>
            </div>
        </div>
    </div>
</div> */
}

export default SavedPodcastCard;
=======
export default SavedPodcastCard;
>>>>>>> 5dad96919ef38daf3d5e034fc2b63165b17ae548
