import React from "react";

function Odd({ bets }) {
  return (
    <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
      {bets?.map((bet) => (
        <p style={{ border: "1px solid black", padding: "1em" }}>{bet.Price}</p>
      ))}
    </div>
  );
}

export default Odd;
