import React from "react";
import useColorChange from "use-color-change";
function Bet({ bet }) {
  const colorStyle = useColorChange(bet?.Price, {
    higher: "limegreen",
    lower: "crimson",
    duration: 1800,
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <span style={colorStyle} className="bet">
        {bet?.Price}
      </span>
    </div>
  );
}

export default Bet;
