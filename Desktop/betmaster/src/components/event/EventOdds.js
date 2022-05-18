import React from "react";
import Odd from "./Odd";

function EventOdds({ market }) {
  return (
    <div>
      {market?.map((m) => (
        <Odd bets={m.Bets} />
      ))}
    </div>
  );
}

export default EventOdds;
