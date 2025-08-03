import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="rounded-xl border shadow-sm p-4 bg-white hover:shadow-md transition">
      <h2 className="text-lg font-bold mb-2">{event.title}</h2>
      <p className="text-sm text-gray-600">{event.description}</p>
      <p className="text-xs text-gray-400 mt-1">{event.date} · {event.college}</p>
    </div>
  );
};

export default EventCard;