import React, { useEffect, useState } from "react";
import * as $ from "jquery";
import { scopes } from "../../utils/config";
import hash from "../../utils/hash"
import Player from "../../utils/player"
import NavBar from "../../Components/NavBar"
import "./style.css";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
  const [search, setSearch] = useState("");

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
    const interval = setInterval(() => { tick(); console.log("tick") }, 10000);

    return () => {
      clearInterval(interval);
      //clears interval on component unmount
    }
  })

  function tick() {
    console.log("token: ", token)
    console.log("item: ", item)
    if (token) {
      getCurrentlyPlaying(token);
    }
  }

  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value)
    setSearch(value)
  }

  function spotSearch(event) {
    axios.get(
      "https://api.spotify.com/v1/search",
      {
        headers: {
          "Authorization": "Bearer" + token
        }
      }
    )
  }
  //curl -X "GET" "https://api.spotify.com/v1/search?q=SEARCHQUERY&type=podcast&limit=10" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCw_h2hbUG4QgSLR6BzlQDTqX9q3iePZCp5MVjCk4donbNygem56Vg2Lc0zJlKx9NjZEu3eaYu7_gF8xPXPQDsa1xg8POKRoBDAzU71xmTEPIyTYd89ZWJrekXRaSIKJ8DH2jdq5GBGLznOgY0MLg"
  function getCurrentlyPlaying(token) {
    // Make a call using the token
    console.log("call made")

    axios.get(
      "https://api.spotify.com/v1/me/player",
      {
        headers: {
          "Authorization": "Bearer" + token
        }
      }
    )
      .then((response) => {
        // Checks if the data is not empty
        if (!response) {
          setNoData(true);
          return;
        }
        console.log("data: ", response);
        setItem(response.item)
        set_is_playing(response.is_playing)
        setProgress(response.progress_ms)
        setNoData(false)
        return;
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

      </header>

      {noData && (
        <p>
          You need to be playing a song on Spotify, for something to appear
          here.
        </p>
      )}
      {!noData && (
        <div className="card">
          <img className="card-img-top" src={item.album.images[0].url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </ div>
        </div>)}

      {!token && (<a
        className="btn btn-primary"
        href={`${process.env.REACT_APP_authEndpoint}?client_id=${process.env.REACT_APP_clientId}&redirect_uri=${process.env.REACT_APP_redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>)}


      <div className="card mb-5 d-block mx-auto" id="searchbar">
        <form className="input-group" onSubmit={spotSearch}>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={search}
            onChange={handleInputChange}
          />
          <button type="button" className="btn btn-outline-primary" >
            Search
        </button>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </form >
      </div>
    </div >
  );
}

export default SpotifyComponent;
