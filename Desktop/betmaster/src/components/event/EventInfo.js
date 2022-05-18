import React from "react";
import EventScore from "./EventScore";

function EventInfo({ fixture }) {
  return (
    <div>
      <EventScore fxtr={fixture} />
    </div>
  );
}

export default EventInfo;
