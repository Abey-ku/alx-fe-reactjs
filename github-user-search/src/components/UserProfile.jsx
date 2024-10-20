import React from 'react';

function UserProfile({ user }) {
  if (!user) return <p>No user data</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt="Avatar" width="100" />
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserProfile;
