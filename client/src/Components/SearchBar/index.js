import "./style.css";
import React, { useState } from "react";
import PodCastCard from "../PodcastCard";
import * as $ from "jquery";
import Wrapper from "../Wrapper";

function SearchBar(props) {
  const [search, setSearch] = useState("");
  const [podcasts, setPodcasts] = useState([]);

  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value);
    setSearch(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let type = "episode,show";
    let query =
      `https://api.spotify.com/v1/search?q=` +
      search +
      `&type=` +
      type +
      `&limit=12`;
    $.ajax({
      url: query,
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader(
          "Authorization",
          "Bearer " + props.userObject.token
        );
      },
      success: (response) => {
        console.log(response);
        setPodcasts(response.shows.items);
      },
    });

    console.log("search: ", search);
    // axios.get(
    //   query,
    //   {
    //     headers: {
    //       "Authorization": "Bearer" + token
    //     }
    //   }
    // )
  }

  return (
    <div className="container">
      <div className="mb-5 d-block mx-auto" id="searchbar">
        <form className="input-group" onSubmit={handleFormSubmit}>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={search}
            onChange={handleInputChange}
          />
        </form>
        <small className="justify-content-center">
          Press enter to start the search
        </small>
      </div>
      <Wrapper>
        {podcasts.map((podcast, index) => {
          return (
            <PodCastCard
              key={index}
              image={podcast.images[1].url}
              title={podcast.name}
              publisher={podcast.publisher}
              link={podcast.external_urls.spotify}
            />
          );
        })}
      </Wrapper>
    </div>
  );
}

export default SearchBar;
