import React from 'react';
import ReactDOM from 'react-dom/client'; // Correctly import from 'react-dom/client'
import './index.css'; // Correct path for your CSS file
import MainLayout from './components/MainLayout'; // Ensure the path to MainLayout is correct

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
