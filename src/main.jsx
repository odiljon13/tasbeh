import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* "/" ga kirganda Login ko'rinadi */}
        <Route path="/" element={<Login />} />

        {/* "/home" ga kirganda Tasbeh ko'rinadi */}
        <Route path="/home" element={<App />} />

        {/* Boshqa barcha yo'llar Login ga yo'naltiriladi */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
