// src/App.js
import './App.css';
import Header from "./MyComponents/Header";
import { Include } from "./MyComponents/Include";
import { Display } from "./MyComponents/Display";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [registrations, setRegistrations] = useState([]);
  const [highlightedUserId, setHighlightedUserId] = useState(null);

  useEffect(() => {
    // Fetch all registrations when the component mounts
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/registrations', {
          headers: {
            'x-api-key': process.env.REACT_APP_API_KEY // Use API key from environment variables if needed
          }
        });
        setRegistrations(response.data);
      } catch (error) {
        console.error("Error fetching registrations", error);
      }
    };

    fetchRegistrations();
  }, []);

  const onDelete = async (single) => {
    console.log("I am onDelete of single registration", single);
    try {
      await axios.delete(`http://localhost:5000/register/${single._id}`, {
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY // Use API key from environment variables if needed
        }
      });
      setRegistrations(registrations.filter((e) => e._id !== single._id));
    } catch (error) {
      console.error("Error deleting user", error);
    }
  }

  const include = async (name, email, password, confirmpassword) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    if (hasUppercase && hasLowercase && hasNumber) {
      if (password === confirmpassword) {
        console.log("Registering User", name, email, password)
        const adding = {
          name: name,
          email: email,
          password: password
        }
        try {
          const response = await axios.post('http://localhost:5000/register', adding, {
            headers: {
              'x-api-key': process.env.REACT_APP_API_KEY // Use API key from environment variables if needed
            }
          });
          console.log(response.data);
          setRegistrations([...registrations, response.data]);
        } catch (error) {
          console.error("Error registering user", error);
        }
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Password must contain at least one uppercase letter, one lowercase letter, and one number');
    }
  }

  const highlightUser = (userId) => {
    setHighlightedUserId(userId);
  }

  return (
    <>
      <Header registrations={registrations} highlightUser={highlightUser} />
      <Include include={include} />
      <Display registrations={registrations} onDelete={onDelete} highlightedUserId={highlightedUserId} />
      <Footer />
    </>
  );
}

export default App;
