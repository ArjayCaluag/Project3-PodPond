import React from "react";
import "./style.css";


function SearchBar() {
  return (
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
  );
}

export default SearchBar;
