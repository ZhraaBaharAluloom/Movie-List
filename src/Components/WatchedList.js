import React from "react";
import { observer } from "mobx-react";

//style
import { WatchedListWrapper } from "../styles";

const WatchedList = () => {
  return (
    <>
      <br />
      <h3>Watchedlist</h3>

      <WatchedListWrapper></WatchedListWrapper>
    </>
  );
};

export default observer(WatchedList);
