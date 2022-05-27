import "./app.css";
import { useEffect, useRef, useState } from "react";
import Event from "./components/event/Event";
import { io } from "socket.io-client";

const SERVER = "http://127.0.0.1:4000";

const credentials = {
  PackageId: 1016,
  UserName: "skystopcs@gmail.com",
  Password: "G735@dhu8T",
};
function App() {
  const [events, setEvents] = useState([]);
  const socket = useRef(io(SERVER));

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/preMatch/GetFixtures", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("somthings went wrong!");
      }
      const response = await res.json();

      const getmarket = await fetch("/preMatch/GetFixtureMarkets", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resMarkets = await getmarket.json();

      const resEvents = response.Body.map((event) => {
        return {
          id: event.FixtureId,
          league: event.Fixture.League,
          location: event.Fixture.Location,
          participants: event.Fixture.Participants,
          sport: event.Fixture.Sport,
          start: event.Fixture.StartDate,
          markets: resMarkets.Body.find(
            (mar) => mar.FixtureId === event.FixtureId
          )?.Markets,
        };
      });
      setEvents(resEvents);
    };

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const updateMarket = (FexId, markets) => {
      const newEvents = [...events];
      const fxtrIndex = newEvents.findIndex((ev) => ev.id === FexId);
      console.log(fxtrIndex);
      const fxtr = newEvents.find((ev) => ev.id === FexId);
      if (fxtr) {
        const betIndx = fxtr.markets.findIndex(
          (bet) => (bet.Id = markets[0].Id)
        );
        fxtr.markets[betIndx] = markets[0];
        newEvents[fxtrIndex] = fxtr;
        console.log(newEvents[fxtrIndex]);
        setEvents(newEvents);
      }
    };

    socket.current.on("market", (msg) => {
      console.log(msg);
      updateMarket(msg[0]?.FixtureId, msg[0]?.Markets);
    });
  }, [events]);

  if (events.length === 0) {
    return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Event events={events} />
    </div>
  );
}

export default App;
