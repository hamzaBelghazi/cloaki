import React from "react";
import EventBoard from "./EventBoard";

function Sport({ sport }) {
  return (
    <div>
      <h1>{sport[0]?.sport?.Name}</h1>
      {sport.map((sp) => (
        <EventBoard key={sp.id} event={sp} />
      ))}
    </div>
  );
}

export default Sport;
