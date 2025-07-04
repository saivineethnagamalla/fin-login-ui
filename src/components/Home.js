import React, { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    fetch('https://fin-login.onrender.com/fin-login/api/home', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Unauthorized or token expired');
        }
        return response.text();
      })
      .then(data => {
        setMessage(data);
        // Redirect after successful fetch
        window.location.href = 'https://fin-cal-v1-ui.onrender.com/';
      })
      .catch(error => setMessage(error.message));
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
