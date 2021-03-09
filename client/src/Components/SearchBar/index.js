import "./style.css";
import React, { useState } from "react";
import * as $ from "jquery";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value)
    setSearch(value)
  }

  function spotSearch(event) {
    event.preventDefault();
    console.log("search: ", search)
    let query = `https://api.spotify.com/v1/search?q=` + search + `&type=episode,show&limit=10`
    // axios.get(
    //   query,
    //   {
    //     headers: {
    //       "Authorization": "Bearer" + token
    //     }
    //   }
    // )
    $.ajax({
      url: query,
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + props.userObject.token);
      },
      success: (response) => {
        console.log(response)
      }
    })
  }

  return (
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
      </form >
    </div>
  );
}

export default SearchBar;
