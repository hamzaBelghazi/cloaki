import React from "react";
import EventBoard from "./EventBoard";

function Sport({ sport }) {
  return (
    <div>
      {sport.map((sp) => (
        <EventBoard key={sp.id} event={sp} />
      ))}
    </div>
  );
}

export default Sport;
