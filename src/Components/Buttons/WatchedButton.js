import React from "react";
import movieStore from "../../stores/MovieStore";

const WatchedButton = ({ movieId }) => {
  const handleWatched = () => {
    movieStore.watchedButton(movieId);
  };

  return <button onClick={handleWatched}>Watched </button>;
};

export default WatchedButton;
