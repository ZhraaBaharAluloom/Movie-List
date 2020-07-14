import { decorate, observable } from "mobx";
import movies from "../movies";

class MovieStore {
  movies = movies;

  createMovie = (newMovie) => {
    newMovie.id = this.movies[movies.length - 1].id + 1;
    this.movies.push(newMovie);
  };

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== +movieId);
    console.log(movies);
  };
}

decorate(MovieStore, { movies: observable });

const movieStore = new MovieStore();

export default movieStore;
