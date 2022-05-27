import React from "react";
import useColorChange from "use-color-change";
function GropedBet({ bet }) {
  const p1 = bet?.find((b) => b.Name === "1");
  const p2 = bet?.find((b) => b.Name === "2");

  const colorStyle = useColorChange(p1?.Price, {
    higher: "limegreen",
    lower: "crimson",
    duration: 1800,
  });
  const colorStyle2 = useColorChange(p2?.Price, {
    higher: "limegreen",
    lower: "crimson",
    duration: 1800,
  });
  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
        justifyContent: "space-between",
        margin: "5px 0px",
      }}
    >
      <span style={colorStyle} className="bet">
        {p1?.Price}
      </span>
      <span className="line">{bet?.[0]?.Line}</span>
      <span style={colorStyle2} className="bet">
        {p2?.Price}
      </span>
    </div>
  );
}

export default GropedBet;
