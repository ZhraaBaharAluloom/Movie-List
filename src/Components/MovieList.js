import React from "react";
import movieStore from "../stores/MovieStore";
import MovieItem from "./MovieItem";
import { observer } from "mobx-react";

//style
import { ListWrapper } from "../styles";

const MovieList = () => {
  const movieList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  return (
    <div>
      <h3>Watchlist</h3>
      <ListWrapper>{movieList}</ListWrapper>
    </div>
  );
};

export default observer(MovieList);
