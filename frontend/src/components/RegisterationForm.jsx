// src/components/RegistrationForm.jsx
import React from 'react';

const RegistrationForm = ({ type }) => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <input type="text" placeholder="Name" required />

      {type === 'student' && <input type="text" placeholder="College Name" required />}
      {type === 'college' && <input type="text" placeholder="College Code" required />}

      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#6200ea', color: '#fff' }}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
