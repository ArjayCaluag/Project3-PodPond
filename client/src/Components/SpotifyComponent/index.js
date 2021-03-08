import React, { useEffect, useState } from "react";
import * as $ from "jquery";
import { scopes } from "../../utils/config";
import hash from "../../utils/hash"
import Player from "../../utils/player"
import NavBar from "../../Components/NavBar"
import "./style.css";

function SpotifyComponent() {
  const [token, setToken] = useState("");
  const [item, setItem] = useState({
    album: {
      images: [{ url: "" }],
    },
    name: "",
    artists: [{ name: "" }],
    duration_ms: 0,
  })
  const [noData, setNoData] = useState(false);
  const [is_playing, set_is_playing] = useState(false);
  const [progress, setProgress] = useState(0);

  // constructor() {
  //   super();
  //   this.state = {
  //     token: null,
  //     item: {
  //       album: {
  //         images: [{ url: "" }],
  //       },
  //       name: "",
  //       artists: [{ name: "" }],
  //       duration_ms: 0,
  //     },
  //     is_playing: "Paused",
  //     progress_ms: 0,
  //     no_data: false,
  //   };

  tick();


  useEffect(() => {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      setToken(
        _token,
      );
      getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    const interval = setInterval(() => { tick(); console.log("tick") }, 5000);

    return () => {
      clearInterval(interval);
      //clears interval on component unmount
    }
  })
  // componentWillUnmount() {
  //    // clear the interval to save resources
  //    clearInterval(this.interval);
  // }

  function tick() {
    if (token) {
      getCurrentlyPlaying(token);
    }
  }

  function getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        // Checks if the data is not empty
        if (!data) {
          setNoData(true);
          return;
        }
        console.log(data);
        setItem(data.item)
        set_is_playing(data.is_playing)
        setProgress(data.progress_ms)
        setNoData(false)
      },
    });
  }


  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

        {/* {token && !noData && (
          <Player
            item={item}
            is_playing={is_playing}
            progress_ms={progress}
          />
        )} */}
        {noData && (
          <p>
            You need to be playing a song on Spotify, for something to appear
            here.
          </p>
        )}
      </header>
      <div className="card">
        <img className="card-img-top" src={item.album.images} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {!token && (<a
            className="btn btn-primary"
            href={`${process.env.REACT_APP_authEndpoint}?client_id=${process.env.REACT_APP_clientId}&redirect_uri=${process.env.REACT_APP_redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>)}
        </div>
      </div>
      <div className="card mb-5 d-block mx-auto" id="searchbar">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"

          />
          <button type="button" className="btn btn-outline-primary" >
            Search
        </button>
        </div>
      </div>
    </div>
  );
}
export default SpotifyComponent;
