import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal'; // <- NEW IMPORT
import eventsData from '../data/events';

const EventList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [collegeFilter, setCollegeFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null); // <- NEW

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || event.category === categoryFilter;
    const matchesCollege = collegeFilter === 'All' || event.college === collegeFilter;
    return matchesSearch && matchesCategory && matchesCollege;
  });

  const uniqueCategories = ['All', ...new Set(eventsData.map(event => event.category))];
  const uniqueColleges = ['All', ...new Set(eventsData.map(event => event.college))];

  return (
    <div className="px-4 md:px-12 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search events..."
          className="border rounded-lg px-4 py-2 w-full md:w-1/3"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-4 flex-col md:flex-row">
          <select
            className="border rounded-lg px-4 py-2"
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
          >
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            value={collegeFilter}
            onChange={e => setCollegeFilter(e.target.value)}
          >
            {uniqueColleges.map(col => (
              <option key={col} value={col}>{col}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} onClick={() => setSelectedEvent(event)}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-12">
          <p>No events match your criteria. Try changing filters or searching something else.</p>
        </div>
      )}

      {/* MODAL */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default EventList;
