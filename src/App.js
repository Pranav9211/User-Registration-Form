import './App.css';
import Header from "./MyComponents/Header";
import { Include } from "./MyComponents/Include";
import { Display } from "./MyComponents/Display";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';

function App() {
  let initRegistration;
  if (localStorage.getItem("registrations") === null) {
    initRegistration = [];
  }
  else {
    initRegistration = JSON.parse(localStorage.getItem("registrations"));
  }

  const onDelete = (single) => {
    console.log("I am onDelete of single registration", single);
    setRegistrations(registrations.filter((e) => {
      return e !== single;
    }));
    localStorage.setItem("registrations", JSON.stringify(registrations));
  }
  const include = (name, email, password, confirmpassword) => {
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
        setRegistrations([...registrations, adding]);
        console.log(adding);
      }
      else {
        alert('Passwords do not match')
      }
    }
    else {
      alert('Password must contain at least one uppercase letter, one lowercase letter, and one number');
    }
  }
  const [registrations, setRegistrations] = useState([initRegistration]);
  useEffect(() => {
    localStorage.setItem('registrations', JSON.stringify(registrations));
  }, [registrations])

  return (
    <>
      <Header />
      <Include include={include} />
      <Display registrations={registrations} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
