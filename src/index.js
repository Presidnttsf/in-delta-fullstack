import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import './responsive.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './UserContext';


const root = createRoot(document.getElementById('root'));
root.render(
  <UserProvider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);

reportWebVitals();
