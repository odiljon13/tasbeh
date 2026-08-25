import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // Oddiy login tekshiruvi (username: admin, password: 1234)
    if (username === 'admin' && password === '1234') {
      navigate('/home')
    } else {
      setError("Login yoki parol noto'g'ri!")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Kirish</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Foydalanuvchi nomi</label>
            <input
              type="text"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Parol</label>
            <input
              type="password"
              placeholder="••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="login-btn">Kirish</button>
        </form>
      </div>
    </div>
  )
}

export default Login
