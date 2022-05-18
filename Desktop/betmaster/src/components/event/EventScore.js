import React from "react";
import EventOdds from "./EventOdds";

function EventScore({ fxtr }) {
  return (
    <>
      <div
        className="participant"
        style={{ display: "flex", alignItems: "center", gap: "1em" }}
      >
        <p>{fxtr.Fixture.Participants[0].Name}</p>
        <span>vs</span>
        <p>{fxtr.Fixture.Participants[1].Name}</p>
      </div>
      <div>
        <EventOdds market={fxtr.Markets} />
      </div>
    </>
  );
}

export default EventScore;
