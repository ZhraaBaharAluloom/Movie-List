import React, { useState } from "react";
import { observer } from "mobx-react";
import SearchBar from "../Components/SearchBar";
import movieStore from "../stores/MovieStore";

//style
import { WatchedListWrapper } from "../styles";
import WatchedItem from "./WatchedItem";

const WatchedList = () => {
  const [query, setQuery] = useState("");

  const watchedList = movieStore.movies
    .filter((movie) => movie.watch)
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <WatchedItem movie={movie} key={movie.id} />);
  const moviesSize = watchedList.length;

  return (
    <div>
      <br />
      Numbers of Watched Movies : {moviesSize}
      <SearchBar setQuery={setQuery} />
      <WatchedListWrapper>{watchedList}</WatchedListWrapper>
    </div>
  );
};

export default observer(WatchedList);
