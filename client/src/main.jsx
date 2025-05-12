import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
// import Header from './components/employer-dashboard/Header.jsx';
// import Sidebar from './components/employer-dashboard/Sidebar.jsx';
import ForgotPassword from './components/forgot-password/Forgot-password.jsx';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
      <ForgotPassword />
  </BrowserRouter>
)
