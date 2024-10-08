import React, { useState } from 'react'

const Login = ({onLogin}) => {

    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User LoggedIn", username);
        onLogin(username);
    };

    return (
    <div className="card mx-auto" style={{ maxWidth: '700px', padding: '100px', marginTop:"100px" }}>
      <h2 className="card-title text-center">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  )
}

export default Login