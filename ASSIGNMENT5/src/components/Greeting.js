import React from 'react';

const Greeting = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, {username}!</h2>
      ) : (
        <h2>Welcome to my Website!!!</h2>
      )}
    </div>
  );
};

export default Greeting;
