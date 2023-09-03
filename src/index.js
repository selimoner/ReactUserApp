import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './Context';

const root = document.getElementById('root');

createRoot(root).render(
  <UserProvider>
    <App />
  </UserProvider>
);