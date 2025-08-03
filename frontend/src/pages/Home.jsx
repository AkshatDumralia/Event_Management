import React, { useState } from "react";
import eventsData from "../data/events";
import { motion } from "framer-motion";


const Home = () => {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover z-[-1]"
          src="/assets/event-hero.mp4"
        />
        <div className="flex flex-col justify-center items-center h-full bg-black/40 text-white px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Discover & Participate in Exciting Events
          </h1>
          <p className="text-lg sm:text-xl text-center max-w-2xl">
            From tech summits to cultural nights, find events hosted by top
            colleges across Mumbai.
          </p>
        </div>
      </div>

      {/* Search & Events */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="mt-1 text-gray-700">{event.venue}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                  {event.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
