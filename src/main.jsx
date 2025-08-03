import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import React from 'react'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* You wrap <App /> with <AuthContext> to provide authentication state to the whole app via React Context API. */}
    <AuthProvider>
      <App/>  
    </AuthProvider>
  </React.StrictMode>,
)
