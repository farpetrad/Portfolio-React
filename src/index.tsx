import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "H9Q_MLeDPDcmU1O5G",
  limitRate: {
    // Set the limit rate for the application
    id: "myportfolio",
    // Allow 1 request per 60s
    throttle: 60000,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
