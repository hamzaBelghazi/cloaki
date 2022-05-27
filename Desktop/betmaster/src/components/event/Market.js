import React from "react";
import Bets1X2 from "./Bets1X2";
import BetsDouble from "./BetsDouble";
import BetsHandi from "./BetsHandi";

function Market({ markets }) {
  const m1x2 = markets?.find((mark) => mark.Name === "1X2");
  const mDouble = markets?.find((mark) => mark.Name === "Double Chance");
  // const m12 = markets?.find((mark) => mark.Name === "12");
  const mAsianHandicap = markets?.find(
    (mark) => mark.Name === "Asian Handicap"
  );

  // const mAsianUnderOver = markets?.find(
  //   (mark) => mark.Name === "Asian Under/Over"
  // );

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h3>{m1x2?.Name}</h3>
        <Bets1X2 bets={m1x2?.Bets} />
      </div>
      <div>
        <h3>{mDouble?.Name}</h3>
        <BetsDouble bets={mDouble?.Bets} />
      </div>
      <div>
        <h3>{mAsianHandicap?.Name}</h3>
        <BetsHandi bets={mAsianHandicap?.Bets} />
      </div>
      {/* <div>
        <h3>{m12?.Name}</h3>
        <Bets bets={m12?.Bets} />
      </div>
      <div>
        <h3>{mAsianUnderOver?.Name}</h3>
        <Bets bets={mAsianUnderOver?.Bets} />
      </div> */}
    </div>
  );
}

export default Market;
