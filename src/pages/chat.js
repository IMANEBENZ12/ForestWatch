import React, { useState } from 'react';
import './chat.css';

const CommunityChat = () => {
  // State for event details
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [events, setEvents] = useState([]);
 

  // Handle form submission
  const handleCreateEvent = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    if (eventName === '' || eventDescription === '' || eventDate === '') {
      alert('Please fill in all fields.');
      return;
    }

    const newEvent = {
      id: events.length + 1,
      name: eventName,
      description: eventDescription,
      date: eventDate,
    };

    // Update events state with the new event
    setEvents([...events, newEvent]);

    // Clear the form
    setEventName('');
    setEventDescription('');
    setEventDate('');
  };

  return (
    <div className='page-func'>
    <div className="page-title">
      <h1 className="communityChat"> Community Events                    </h1>
      <div className="event-details">
      <h2 className="create-event">Create Event</h2>
      {/* Event creation form */}
      <div className="create-event-box">
      <form onSubmit={handleCreateEvent}>
        <div className="form-group">
          <label>Event Name:</label>
          <input className='event-input-name'
            type="text" 
            value={eventName} 
            onChange={(e) => setEventName(e.target.value)} 
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label>Event Description:</label>
          <textarea className='event-input-description'
            value={eventDescription} 
            onChange={(e) => setEventDescription(e.target.value)} 
            placeholder="Enter description"
          />
        </div>
        <div className="form-group">
          <label>Event Date:</label>
          <input className='event-input-date'
            type="date" 
            value={eventDate} 
            onChange={(e) => setEventDate(e.target.value)} 
          />
        </div>
        <button className="button"
        type="submit">Create Event
        </button>
      </form>
      </div>

      <h3 className="upcoming-event">Upcoming Events</h3>
      {/* Display events list */}
      <div className="upcoming-events-container">
        {events.map(event => (
          <li className="upcoming-event-item" key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
          </li>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default CommunityChat;