import React, { Component } from "react";
import * as $ from "jquery";
import { scopes } from "../../utils/config";
import hash from "../../utils/hash"
import Player from "../../utils/player"
import "./style.css";

function SpotifyComponent(){
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

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  useEffect(() => {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);

    return () => {
      clearInterval(this.interval);
      //clears interval on component unmount
    }
  })
  componentWillUnmount() {
    // clear the interval to save resources
    
  }

  tick() {
    if (this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
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
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the
                              user does not give F5 and has opened his Spotify. */,
        });
      },
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${process.env.REACT_APP_authEndpoint}?client_id=${process.env.REACT_APP_clientId}&redirect_uri=${process.env.REACT_APP_redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && !this.state.no_data && (
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
            />
          )}
          {this.state.no_data && (
            <p>
              You need to be playing a song on Spotify, for something to appear
              here.
            </p>
          )}
        </header>
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
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
}

export default SpotifyComponent;
