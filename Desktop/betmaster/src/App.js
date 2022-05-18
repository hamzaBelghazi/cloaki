import { useEffect, useState } from "react";
import Event from "./components/event/Event";

const credentials = {
  PackageId: 1016,
  UserName: "skystopcs@gmail.com",
  Password: "G735@dhu8T",
};
function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/GetEvents", {
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
      setEvents(response.Body);
    };

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <Event events={events} />
    </div>
  );
}

export default App;
