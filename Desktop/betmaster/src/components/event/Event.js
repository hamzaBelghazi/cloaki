import React from "react";
import Sport from "./Sport";

function Event({ events }) {
  const cricketObjs = events.filter((ev) => ev.sport.Name === "Cricket");
  const footballObjs = events.filter((ev) => ev.sport.Name === "Football");
  const tennisObjs = events.filter((ev) => ev.sport.Name === "Tennis");

  return (
    <div>
      <Sport sport={footballObjs} />
      <Sport sport={cricketObjs} />
      <Sport sport={tennisObjs} />
    </div>
  );
}

export default Event;
