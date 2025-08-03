// src/pages/UpcomingEvents.jsx
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal'; // if using modal

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sampleEvents = [
    {
      id: 1,
      title: 'Hackathon 2025',
      date: '2025-08-12',
      location: 'KJ Somaiya College, Mumbai',
      description: 'Inter-college hackathon with ₹1L prize.',
    },
    {
      id: 2,
      title: 'Cultural Fest',
      date: '2025-09-05',
      location: 'R.A. Podar College',
      description: 'Dance, Drama, and Music showdown!',
    },
    {
      id: 3,
      title: "Tech Fest 2025",
      date: "2025-08-20",
      location: "VJTI, Mumbai",
      description: "Explore new innovations in tech and AI. Register now!",

      
    },
  ];

  return (
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Upcoming Events</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {sampleEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
        ))}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default UpcomingEvents;
