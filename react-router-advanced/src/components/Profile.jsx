// src/components/Profile.jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <ul>
        <li><Link to="details">Profile Details</Link></li>
        <li><Link to="settings">Profile Settings</Link></li>
      </ul>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
