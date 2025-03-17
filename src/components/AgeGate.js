// src/components/AgeGate.js
import React, { useState, useEffect } from 'react';

const AgeGate = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('ageVerified') === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerification = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  if (isVerified) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '5px',
          textAlign: 'center',
          maxWidth: '300px',
        }}
      >
        <h2>Age Verification</h2>
        <p>You must be 21 or older to enter this site.</p>
        <button onClick={handleVerification}>I am 21 or older</button>
      </div>
    </div>
  );
};

export default AgeGate;
