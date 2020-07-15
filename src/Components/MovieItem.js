import React from "react";

//buttons
import DeleteButton from "./Buttons/DeleteButton";
import WatchedButton from "./Buttons/WatchedButton";

//style
import { ItemWrapper } from "../styles";

import { observer } from "mobx-react";

const MovieItem = ({ movie }) => {
  return (
    <ItemWrapper>
      {movie.name} <img src={movie.image} />
      <DeleteButton movieId={movie.id} />
      <WatchedButton movieId={movie.id} movie={movie.watch} />
      <hr />
    </ItemWrapper>
  );
};

export default observer(MovieItem);
