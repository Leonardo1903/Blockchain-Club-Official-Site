import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventData from "./EventData";

function EventImages() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    const eventData = EventData();
    const foundEvent = eventData.find((event) => event.id.toString() === id);
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return (
      <div className="text-3xl flex justify-center text-white">Loading...</div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl pb-10">{event.Name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-5">
        {event.Images.map((image, index) => (
          <div
            className="relative border-4 border-black cursor-pointer"
            key={index}
          >
            <div className="border-4 border-yellow-400">
              <img
                src={image}
                alt={`Event Image ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventImages;
