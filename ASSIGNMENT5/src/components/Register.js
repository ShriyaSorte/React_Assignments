import React, { useState } from 'react'

const Register = ({onRegister}) => {

    const [username, setUserName] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Registered:', username);
        onRegister(username);
    };

    return (
        <div className="card mx-auto " style={{ maxWidth: "700px", padding: "100px",marginTop:"100px" }}>
        <h2 className="card-title text-center">Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 ">
            <input type="text" className="form-control" placeholder="Enter Username" value={username} onChange={(e)=>setUserName(e.target.value)} required/><br/>
            {/* <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/> */}
            </div>
            <button type="submit" className="btn btn-dark w-100">Register</button>
        </form>
        </div>
  )
}

export default Register