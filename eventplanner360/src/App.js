import React from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import EventCreation from './components/EventCreation';
import GuestList from './components/GuestList';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/create-event" component={EventCreation} />
          <Route path="/guest-list" component={GuestList} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App