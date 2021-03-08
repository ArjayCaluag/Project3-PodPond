import React from "react";
import Jumbotron from "../../Components/Jumbotron";
import SearchBar from "../../Components/SearchBar";
import PodCastCard from "../../Components/PodcastCard";

function SearchPage(props) {

  return (
    <div>
      <Jumbotron/>
      <SearchBar/>
      <PodCastCard/>
    </div>
  );
}

export default SearchPage;
