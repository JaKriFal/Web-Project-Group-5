import "../styles/loginstyle.css";
import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function UserRegister() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password, username)
  }


  return (
    <div className="loginform">
    <form onSubmit={handleSubmit}>
      <h3>User Registration</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
}