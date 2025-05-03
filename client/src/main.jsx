import React from 'react';
import { createRoot } from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'
import '@mui/material/styles';
// import '@fontsource/roboto/300.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
