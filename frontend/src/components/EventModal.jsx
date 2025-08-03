import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          <strong>College:</strong> {event.college} &nbsp; | &nbsp;
          <strong>Category:</strong> {event.category}
        </p>
        <p className="mb-4">{event.description}</p>
        {/* You can add more fields here like time, venue, etc. */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
