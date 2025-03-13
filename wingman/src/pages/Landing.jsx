import React from 'react';
//import '../styles/Search.css';
import Navbar from '../components/Navbar';

function Landing() {
  return (
    <>
      <Navbar />
      <div className="search">
        <h1>The landing page will show all of your conversations 
          - 4 person group chats to set up the date.
          Potential for advertising within each conversation
        </h1>
      </div>
    </>
  );
}

export default Landing;