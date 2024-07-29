import React, { useState } from 'react';
import '../styles.css';
import eventImage from '../assets/event.jpg';

function EventCreation() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleCreateEvent = () => {
    // Send event data to the back-end
  };

  return (
    <div className="event-creation">
      <h2>Create Event</h2>
      <img src={eventImage} alt="Event" className="event-image" />
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="input-field"
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        className="input-field"
      />
      <button onClick={handleCreateEvent} className="create-button">Create Event</button>
    </div>
  );
}

export default EventCreation