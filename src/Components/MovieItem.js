import React from "react";

//style
import { ItemWrapper } from "../styles";
import WatchedButton from "./Buttons/WatchedButton";
import DeleteButton from "./Buttons/DeleteButton";

import { observer } from "mobx-react";

const MovieItem = ({ movie }) => {
  return (
    <ItemWrapper>
      {movie.name}
      <DeleteButton movieId={movie.id} />

      <hr />
    </ItemWrapper>
  );
};

export default observer(MovieItem);
