import React, { useState } from 'react';
import '../styles.css';
import guestlistImage from '../assets/guestlist.jpg';

function GuestList() {
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState('');

  const handleAddGuest = () => {
    setGuestName('');
    setGuests([...guests, guestName]);
  };
  
  return (
    <div className="guest-list">
      <h2>Guest List</h2>
      <img src={guestlistImage} alt="Guest List" className="guestlist-image" />
      <input
        type="text"
        placeholder="Guest Name"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAddGuest} className="add-button">Add Guest</button>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList