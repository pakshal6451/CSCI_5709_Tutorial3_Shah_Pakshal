import React, { useState } from "react";
import "./RegistrationForm.css";
import ProfilePage from "./ProfilePage";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
      alert("All fields are required.");
    } else if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      alert("First Name and Last Name should contain only letters.");
    } else if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      alert("Please enter a valid email address.");
    } else if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
    } else if (password !== confirmPassword) {
      alert("Password and Confirm Password should match.");
    } else {
      setShowProfile(true);
    }
  };

  return (
    <div>
      {showProfile ? (
        <ProfilePage firstName={firstName} lastName={lastName} email={email} />
      ) : (
        <div>
          <h2>Profile Registration</h2>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" value={firstName} onChange={handleFirstNameChange} />
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" value={lastName} onChange={handleLastNameChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <label>
              Confirm Password:
              <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </label>
            <br />
            <button type="submit">Submit/Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
