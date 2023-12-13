import "../styles/loginstyle.css";
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function LogIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="loginform">
    <form onSubmit={handleSubmit}>
      <h3>User login</h3>
      <label htmlFor="email">Email</label>
      <input type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} />
      <label htmlFor="password">Password</label>
      <input type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}  />
      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
}