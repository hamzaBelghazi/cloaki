import React from "react";
import EventInfo from "./EventInfo";

function Event({ events }) {
  return (
    <div>
      {events.map((event) => (
        <EventInfo key={event.FixtureId} fixture={event} />
      ))}
    </div>
  );
}

export default Event;
