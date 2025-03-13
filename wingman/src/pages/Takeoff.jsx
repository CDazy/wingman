import React from 'react';
//import '../styles/Takeoff.css';
import Navbar from '../components/Navbar';

function Takeoff() {
  return (
    <>
      <Navbar />
      <div className="takeoff">
        <h1>This page will allow you to swipe up or down on different duo's. 
          Swipe left or right to switch between individual profiles within the duo.
          Have to select a wingman from your friends list before potential matches will appear.
          Algorithm: Profiles appear based on zip code, age, and gender</h1>
      </div>
    </>
  );
}

export default Takeoff;