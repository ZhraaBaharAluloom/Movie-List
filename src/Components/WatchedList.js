import React, { useState } from "react";
import { observer } from "mobx-react";
import SearchBar from "../Components/SearchBar";
import movieStore from "../stores/MovieStore";

//style
import { WatchedListWrapper } from "../styles";
import WatchedItem from "./WatchedItem";

const WatchedList = () => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <WatchedItem movie={movie} key={movie.id} />);
  return (
    <div>
      <br />
      <SearchBar setQuery={setQuery} />

      <WatchedListWrapper>{movieList}</WatchedListWrapper>
    </div>
  );
};

export default observer(WatchedList);
