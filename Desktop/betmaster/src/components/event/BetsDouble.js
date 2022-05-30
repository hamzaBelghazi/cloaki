import React from "react";
import Bet from "./Bet";

function BetsDouble({ bets }) {
  const bet1X = bets?.find((bet) => bet.Name === "1X");
  const bet12 = bets?.find((bet) => bet.Name === "12");
  const bet2X = bets?.find((bet) => bet.Name === "X2");

  return (
    <>
      <Bet bet={bet1X} />
      <Bet bet={bet12} />
      <Bet bet={bet2X} />
    </>
  );
}

export default BetsDouble;
