import "./style.css";
import React, { useState } from "react";
import * as $ from "jquery";
import API from "../../utils/API";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value)
    setSearch(value)
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let type = "episode,show";
    API.spotSearch(search, type, props.userObject.token)
    console.log("search: ", search)
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
    <div className="card mb-5 d-block mx-auto" id="searchbar">
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
        <button type="button" className="btn btn-outline-primary" >
          Search
    </button>
      </form >
    </div>
  );
}

export default SearchBar;
