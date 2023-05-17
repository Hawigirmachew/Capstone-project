import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e)=>{
     e.preventDefault();
     localStorage.setItem('email', email)
     localStorage.setItem('name', name)
     localStorage.setItem('password', pass)

  }
  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="name">UserName</label>
          <input type="text" value={name} onChage={e => setName(e.target.value)} className="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="eamil" value={email}  onChange = {e => setEmail(e.target.value)}className="email" id="email" />
          <label htmlFor="pass">Password</label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value
            )} className="pass" id="pass" />
          <button type="submit" className="btn-signup">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
