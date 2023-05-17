import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = (e)=>{
      e.preventDefault()
      console.log(localStorage.getItem('email'))
      console.log(localStorage.getItem('pass'))
  }
  
  return (
    <div className='form-container'>
     <div>
     <form action="" className="login-form" onSubmit={handleLogin}>
     <label htmlFor="email">Email</label>
          <input type="eamil" value={email}  onChange = {e => setEmail(e.target.value)}className="email" id="email" />
          <label htmlFor="pass">Password</label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value
            )} className="pass" id="pass" />
        <button type="submit" className='btn-login'>Login</button>
      </form>
      <p>Don't have an account <Link to="/signup">Sign Up</Link></p>
      </div>
      
    </div>
  )
}
