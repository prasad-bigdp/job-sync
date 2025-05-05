import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
      <App />
  </BrowserRouter>
)
