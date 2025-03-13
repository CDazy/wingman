import React from 'react';
//import '../styles/Profile.css';
import Navbar from '../components/Navbar';

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <h1>Fill out your profile to match with more people</h1>
      </div>
    </>
  );
}

export default Profile;