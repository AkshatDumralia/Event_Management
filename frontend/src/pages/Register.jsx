// src/pages/Register.jsx
import React, { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Register = () => {
  const [type, setType] = useState('student');

  return (
    <div className="register-container" style={{ padding: '2rem' }}>
      <h2>Register as {type === 'student' ? 'Student' : 'College'}</h2>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setType('student')} style={{ marginRight: '10px' }}>
          Student
        </button>
        <button onClick={() => setType('college')}>College</button>
      </div>

      <RegistrationForm type={type} />
    </div>
  );
};

export default Register;
