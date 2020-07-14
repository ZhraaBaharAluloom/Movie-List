import React from "react";
import movieStore from "../../stores/MovieStore";

//data
import { WatchedButtonStyled } from "../../styles";

const WatchedButton = ({ movieId }) => {
  const handleWatched = () => {
    movieStore.watchedButton(movieId);
  };

  return (
    <WatchedButtonStyled onClick={handleWatched}>Watched </WatchedButtonStyled>
  );
};

export default WatchedButton;
