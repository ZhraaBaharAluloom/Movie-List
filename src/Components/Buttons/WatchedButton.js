import React from "react";
import movieStore from "../../stores/MovieStore";

//data
import { WatchedButtonStyled } from "../../styles";
import movies from "../../movies";

const WatchedButton = ({ movieId, movie }) => {
  const handleWatched = () => {
    movieStore.watchedButton(movieId);
  };

  return (
    <WatchedButtonStyled onClick={handleWatched}>
      {movie ? "watched" : "watch"}
    </WatchedButtonStyled>
  );
};

export default WatchedButton;
