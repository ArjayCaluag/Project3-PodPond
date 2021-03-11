import React, { useEffect, useState } from "react";
import CommentsSection from "../Comments";
import API from "../../utils/API";
import "./style.css";

function SavedPodcastCard(props) {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState("");

  useEffect(() => {
    loadComments();
  }, [])

  function loadComments() {
    API.getComments(props.podcast.spotifyID)
      .then(res => setComments(res.data.commentIDs))
      .catch(err => console.log(err));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setPost("");
    API.saveComment({
      text: post,
      spotifyID: props.podcast.spotifyID,
      owner: props.userObject.username
    })
      .then(() => loadComments());
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setPost(value);
  }

  return (
    <div className="container savedPodcast">
      <div className="card savedCard">
        <div className="row no-gutters">
          <div className="col-sm-5 m-2">
            <img alt="Podcast thumbnail" src={props.image} className="card-img-thumbnail savedImg"></img>
          </div>

          <div className="col-sm-6">
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

        <div className="container justify-content-center mt-5 border-left border-right comments">
          <div className="d-flex justify-content-center pt-3 pb-2">
            <form className="input-group" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="text"
                value={post}
                onChange={handleInputChange}
                placeholder="Press Enter to add your comment"
                className="form-control addtxt"
              />
            </form>
          </div>
          {comments.map((comment, index) => {
            return <CommentsSection
              comment={comment}
              key={index}
            />
          })}
        </div>
      </div>

    </div>
  );
}

export default SavedPodcastCard;

// {podcasts.map((podcast, index) => {
//   return <SavedPodcastCard
//     podcast={podcast}
//     key={index}
//     onClick={deletePodcast}
//     image={podcast.image}
//     title={podcast.title}
//     publisher={podcast.publisher}
//     link={podcast.link}
//   />
// })}