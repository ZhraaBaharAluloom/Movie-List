import React from "react";
import MovieList from "./Components/MovieList";
import WatchedList from "./Components/WatchedList";
import AddButton from "./Components/Buttons/AddButton";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <br />
      <AddButton />
      <br />
      <div className="row">
        <div className="col-12">
          <MovieList />
        </div>
        <div className="col-12">
          <WatchedList />
        </div>
      </div>
    </div>
  );
}

export default App;
