import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import UserContext

function App() {
  // Define the user data that you want to share across components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap the ProfilePage component inside UserContext.Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
