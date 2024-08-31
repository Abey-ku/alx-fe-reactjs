// src/App.js
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>React Form Handling</h1>
      <RegistrationForm />
      <hr />
      <formikForm />
    </div>
  );
}

export default App;
