import React from "react";
import Bet from "./Bet";

function BetsDouble({ bets }) {
  const bet1X = bets?.find((bet) => bet.Name === "1X");
  const bet12 = bets?.find((bet) => bet.Name === "12");
  const bet2X = bets?.find((bet) => bet.Name === "X2");

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <Bet bet={bet1X} />
      <Bet bet={bet12} />
      <Bet bet={bet2X} />
    </div>
  );
}

export default BetsDouble;
