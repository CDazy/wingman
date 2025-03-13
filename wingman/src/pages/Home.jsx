import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome to Wingman</h1>
      </div>
    </>
  );
}

export default Home;