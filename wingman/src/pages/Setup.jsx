import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // adjust path as needed
import { collection, setDoc, doc } from 'firebase/firestore';
import '../styles/Setup.css';

function Setup() {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    homeCity: '',
    homeState: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const { firstName, lastName, dateOfBirth, homeCity, homeState } = formData;
    
    if (!firstName || !lastName || !dateOfBirth || !homeCity || !homeState) {
      alert('Please fill out all fields');
      return;
    }

    try {
      // Add a new document to the "users" collection
      // Using setDoc with a custom ID (using email or another unique identifier would be better)
      const userRef = doc(collection(db, "users"));
      
      await setDoc(userRef, {
        ...formData,
        createdAt: new Date(), // Optional: add timestamp
        // You might want to add more fields like user ID, etc.
      });

      // Optionally save to local storage as well
      localStorage.setItem('userSetupData', JSON.stringify(formData));

      // Navigate to home page
      navigate('/home');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to save user data. Please try again.');
    }
};
  return (
    <div className="setup-container">
      <h1>Complete Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="homeCity">Home City</label>
          <input
            type="text"
            id="homeCity"
            name="homeCity"
            value={formData.homeCity}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="homeState">Home State</label>
          <select
            id="homeState"
            name="homeState"
            value={formData.homeState}
            onChange={handleChange}
            required
            >
            <option value="">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            </select>
        </div>

        <button type="submit">Complete Setup</button>
      </form>
    </div>
  );
}

export default Setup;