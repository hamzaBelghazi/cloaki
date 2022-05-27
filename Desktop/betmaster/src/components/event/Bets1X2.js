import React from "react";
import Bet from "./Bet";
import useColorChange from "use-color-change";

function Bets1X2({ bets }) {
  const bet1 = bets?.find((bet) => bet.Name === "1");
  const betX = bets?.find((bet) => bet.Name === "X");
  const bet2 = bets?.find((bet) => bet.Name === "2");

  const colorStyle1 = useColorChange(bet1?.Price, {
    higher: "limegreen",
    lower: "crimson",
    duration: 1800,
  });
  const colorStyle2 = useColorChange(betX?.Price, {
    higher: "limegreen",
    lower: "crimson",
    duration: 1800,
  });
  const colorStyle3 = useColorChange(bet2?.Price, {
    higher: "limegreen",
    lower: "crimson",
    duration: 1800,
  });

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <Bet style={colorStyle1} bet={bet1} />
      <Bet style={colorStyle2} bet={betX} />
      <Bet style={colorStyle3} bet={bet2} />
    </div>
  );
}

export default Bets1X2;
