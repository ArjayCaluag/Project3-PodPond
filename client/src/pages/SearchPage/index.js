import React from "react";
import NavBar from "../../Components/NavBar";
import Jumbotron from "../../Components/Jumbotron";
import SearchBar from "../../Components/SearchBar";
import PodCastCard from "../../Components/PodcastCard";

function SearchPage() {
  return (
    <div>
      <Jumbotron/>
      <SearchBar/>
      <PodCastCard/>
    </div>
  );
}

export default SearchPage;
