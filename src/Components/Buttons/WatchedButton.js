import React from "react";

//stores
import movieStore from "../../stores/MovieStore";

//data
import { WatchedButtonStyled } from "../../styles";

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
