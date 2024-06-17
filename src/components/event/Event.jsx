import { useEffect, useState } from "react";
import { BackgroundBoxesDemo } from "../BackgroundBoxes";
import { NavLink } from "react-router-dom";
import EventData from "./EventData";

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventData = EventData();
    setEvents(eventData);
  }, []);

  const recentEvent = events.slice(-1)[0];
  // const pastEvents = events.slice(0, -1);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      <BackgroundBoxesDemo
        heading={"OUR PAST EVENTS"}
        subheading={"Check out our past events and relive the magic! "}
      />

      <h2 className="text-3xl font-bold mt-12">Latest Event</h2>
      <hr className="border-white mb-4 mx-auto w-1/2 mt-6" />
      {recentEvent && (
        <div className="relative w-full max-w-5xl mt-12" key={recentEvent.id}>
          {" "}
          <NavLink to={`/events/${recentEvent.id}`}>
            {" "}
            <img
              src={recentEvent.Images[0]}
              alt="Large"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 backdrop-blur-lg flex justify-between">
              <p>{recentEvent.Name}</p>
              <p>{recentEvent.Date}</p>
            </div>
          </NavLink>
        </div>
      )}

      {/* <div className="w-full max-w-5xl mt-8 text-center">
        <h2 className="text-3xl font-bold">Past Events</h2>
        <hr className="border-white mt-2 mb-8 mx-auto w-1/2" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-5">
          {pastEvents.map((event, index) => (
            <NavLink to={`/events/${event.id}`} key={event.id}>
              <div className="relative border-4 border-black cursor-pointer">
                <div className="border-4 border-yellow-400">
                  <img
                    src={event.Images[0]}
                    alt={`Event ${index + 1}`}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <span className="flex justify-between">
                    <p>{event.Name}</p>
                    <p>{event.Date}</p>
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Event;
