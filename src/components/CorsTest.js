import React from 'react';

function CorsTest() {
  const testCors = async () => {
    try {
      const response = await fetch('https://fin-login.onrender.com/fin-login/api/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // only needed if your backend uses cookies
      });

      const data = await response.text();
      console.log('Response:', data);
      alert(`CORS Test Success: ${data}`);
    } catch (error) {
      console.error('CORS Test Failed:', error);
      alert('CORS Test Failed. Check console for details.');
    }
  };

  return (
    <div>
      <button onClick={testCors}>Test CORS</button>
    </div>
  );
}

export default CorsTest;
