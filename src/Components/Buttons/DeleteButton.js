import React from "react";
import movieStore from "../../stores/MovieStore";

const DeleteButton = ({ movieId }) => {
  const handleDelete = () => {
    movieStore.deleteMovie(movieId);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
