// src/pages/PastEvents.jsx
import React from 'react';
import EventCard from '../components/EventCard';

const PastEvents = () => {
  const pastEvents = [
    {
      id: 1,
      title: 'Tech Symposium 2024',
      date: '2024-11-20',
      location: 'St. Xavier’s, Mumbai',
      description: 'Technical presentations from top colleges.',
    },
    {
      id: 2,
      title: 'Youth Summit',
      date: '2024-12-10',
      location: 'Jai Hind College',
      description: 'Panels, discussions, and workshops.',
    },
  ];

  return (
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Past Events</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pastEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
