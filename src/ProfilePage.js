import React from "react";
import "./ProfilePage.css";

const ProfilePage = ({ firstName, lastName, email }) => {
  return (
    <div className="container">
      <h2>Profile Page</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ProfilePage;
