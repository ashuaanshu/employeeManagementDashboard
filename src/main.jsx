import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProider from './Context/ContextProider.jsx'



createRoot(document.getElementById('root')).render(

  <ContextProider>
    <App />
  </ContextProider>




)
