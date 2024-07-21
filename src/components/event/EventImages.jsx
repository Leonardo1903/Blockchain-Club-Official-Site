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

  const renderImageGroup = (group, index) => (
    <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-5 mb-4">
      <div className="relative border-4 border-black cursor-pointer col-span-3 sm:col-span-1">
        <div className="border-4 border-orange-500">
          <img
            src={group[0]}
            alt={`Event Portrait Image ${index * 3 + 1}`}
            className="block max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 col-span-3 sm:col-span-2 gap-4">
        {group.slice(1).map((image, idx) => (
          <div
            className="relative border-4 border-black cursor-pointer"
            key={idx}
          >
            <div className="border-4 border-orange-500">
              <img
                src={image}
                alt={`Event Landscape Image ${index * 3 + idx + 2}`}
                className="block max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const imageGroups = [];
  for (let i = 0; i < event.images.length; i += 3) {
    imageGroups.push(event.images.slice(i, i + 3));
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl pb-10">{event.name}</h1>
      {imageGroups.map((group, index) => renderImageGroup(group, index))}
    </div>
  );
}

export default EventImages;
