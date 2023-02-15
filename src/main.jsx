import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvaider from './context/Theme'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvaider>
    <App />
  </ThemeProvaider>,
)
