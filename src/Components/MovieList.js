import React, { useState } from "react";
import movieStore from "../stores/MovieStore";
import MovieItem from "./MovieItem";
import { observer } from "mobx-react";
import SearchBar from "../Components/SearchBar";

//style
import { ListWrapper } from "../styles";
import movies from "../movies";

const MovieList = () => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies
    .filter((movie) => !movie.watch)
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);
  const moviesSize = movieList.length;

  return (
    <div>
      <br />
      Numbers of movies : {moviesSize}
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{movieList}</ListWrapper>
    </div>
  );
};

export default observer(MovieList);
