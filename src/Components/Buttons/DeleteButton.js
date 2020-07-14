import React from "react";
import movieStore from "../../stores/MovieStore";

import { DeletButtonStyled } from "../../styles";

const DeleteButton = ({ movieId }) => {
  const handleDelete = () => {
    movieStore.deleteMovie(movieId);
  };

  return <DeletButtonStyled onClick={handleDelete}>Delete</DeletButtonStyled>;
};

export default DeleteButton;
