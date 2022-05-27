import React from "react";
import Market from "./Market";
import dateTime from "date-time";
function EventBoard({ event }) {
  const gameDate = dateTime({
    date: new Date(event.start),
    showTimeZone: true,
  });
  return (
    <div className="game_card">
      <div className="table_board">
        <h4>{event.league.Name}</h4>
        <p>
          <span>Game start:</span> {gameDate}
        </p>
        <div className="participant">
          <span>{event.participants[0].Name}</span>
          <span>{event.participants[1].Name}</span>
        </div>
      </div>
      <div className="markets">
        <Market markets={event.markets} />
      </div>
    </div>
  );
}

export default EventBoard;
